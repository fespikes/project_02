import { Injectable } from '@angular/core';

import {Http, Headers} from '@angular/http';//for mock data

import { Observable } from 'rxjs/Rx';

import { TdcApiService } from '../../../shared/services/api.service';

@Injectable()
export class DocumentAPIService {
  constructor(
    private api: TdcApiService,
    private http: Http
  ) {

  }

  private get headers(): Headers {
    return new Headers({
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json;charset=UTF-8',
    });
  }

  getTileDocs(): Observable<any> {
    return this.http.get('/v2/document/_ls?r=true')
      .map((res) => res.json());
  }

  getTreeDocs(): Observable<any> {
    return this.http.get('/v2/document/_ls?r=true&reverse=true')
      .map((res) => res.json());
  }

  getDocDetail(url): Observable<any> {
    console.log('doc-detail-url=', url);
    return this.http.get(
      url, { headers: this.headers })
      .map((res) => res.json());
  }

  docsSearch(data): Observable<any> {
    return this.http.post(
      '/v2/search',
      JSON.stringify(data),
      { headers: this.headers }
    ).map((res) => res.json())
  }
}
