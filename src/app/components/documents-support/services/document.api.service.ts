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

  getTileDocs(): Observable<any> {
    return this.http.get('/v2/document/_ls')
      .map((res) => res.json());
  }

  getTreeDocs(): Observable<any> {
    return this.http.get('./assets/mock/docs-tree-folder.json')
      .map((res) => res.json());
  }

  getDocDetail(): Observable<any> {
    return this.http.get('./assets/mock/docs-detail.json')
      .map((res) => res.json());
  }
}
