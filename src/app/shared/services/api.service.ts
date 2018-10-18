import * as path from 'path';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { PartialCollection } from '../models';

@Injectable()
export class TdcApiService {
  constructor(private http: Http) {}

  private get headers(): Headers {
    return new Headers({
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json;charset=UTF-8',
    });
  }

  private makeUrl(url) {
    return path.join('v2/', url);
  }

  private makeUrlByVersion(url, version?) {
    return path.join(
      'backend/api/',
      (version ? version : 'v1'),
      '/',
      url
    );
  }

  private formatErrors(error: any) {
    let data;
    try {
      data = error.json();
    } catch (err) {
      data = {error: 'fail to parse'};
    }
    return Observable.throw(data);
  }

  get(path: string, params: Object = {}): Observable<any> {
    return this.http.get(this.makeUrl(path), { headers: this.headers, search: params })
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  fetch(path: string, params: Object = {}): Observable<any> {
    return this.http.get(this.makeUrlByVersion(path), { headers: this.headers, search: params })
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  getAll(path: string, params: Object = {}): Observable<PartialCollection> {
    params['size'] = Math.pow(2, 31) - 1;
    params['page'] = 1;
    return this.get(path, params);
  }

  getText(path: string, params: Object = {}): Observable<any> {
    return this.http.get(this.makeUrl(path), { headers: this.headers, search: params })
    .catch(this.formatErrors)
    .map((res: Response) => res.text());
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      this.makeUrl(path),
      JSON.stringify(body),
      { headers: this.headers },
    )
    .catch(this.formatErrors)
    .map((res: Response) => res.json());
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      this.makeUrl(path),
      JSON.stringify(body),
      { headers: this.headers },
    )
    .catch(this.formatErrors)
    .map((res: Response) => res.json());
  }

  push(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      this.makeUrlByVersion(path),
      JSON.stringify(body),
      { headers: this.headers },
    )
    .catch(this.formatErrors)
    .map((res: Response) => res.json());
  }

  delete(path): Observable<any> {
    return this.http.delete(
      this.makeUrl(path),
      { headers: this.headers },
    )
    .catch(this.formatErrors)
    .map((res: Response) => res.json());
  }
}
