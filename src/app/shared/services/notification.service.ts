import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

import { TdcApiService } from './api.service';

export class Message {
  content: string;
  createTime: number;
  description: string;
  id: number;
  level: string;
  messageType: string;
}

class CsrfResponse {
  headerName: string;
  parameterName: string;
  token: string;
}

@Injectable()
export class NotificationService {
  private messageSubject = new Subject<Message>();

  message = this.messageSubject.asObservable()
  .skipWhile((message: Message) => message === null)
  .distinctUntilChanged();

  constructor(
    private api: TdcApiService,
  ) {
    this.openSocket();
  }

  getCsrfToken(): Observable<CsrfResponse> {
    return this.api.get('csrf');
  }

  openSocket() {
    this.getCsrfToken()
    .subscribe((data) => {
      this.connect(data);
    }, () => {
      this.connect();
    });
  }

  connect(data?: CsrfResponse) {
    const that = this;
    const headers = {};
    let socketAddress = '/topic/connect';

    if (data) {
      const _csrf_header = data.headerName;
      const _csrf_token = data.token;
      headers[_csrf_header] = _csrf_token;
      socketAddress = '/socket/connect';
    }

    const socket = new SockJS(socketAddress);
    const stompClient = Stomp.over(socket);
    stompClient.debug = null;
    stompClient.connect(headers, function (frame) {
      stompClient.subscribe('/user/queue/notifications', function (resp) {
        const message = JSON.parse(resp.body);
        that.messageSubject.next(message);
      }, headers);
      stompClient.subscribe('/topic/notifications', function(resp) {
        const message = JSON.parse(resp.body);
        that.messageSubject.next(message);
      }, headers);
    });
  }
}
