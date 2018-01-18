import { Injectable } from '@angular/core';

import {Http, Headers} from '@angular/http';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class DocumentAPIService {
  private version = '/docs/v2';

  constructor(
    private http: Http,
  ) {

  }

  private get headers(): Headers {
    return new Headers({
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json;charset=UTF-8',
    });
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

  getSearchTreeModel(): Observable<any> {
    return this.http.get(
      `${this.version}/document/_ls?r=true&reverse=true`,
    )
    .catch(this.formatErrors)
    .map((res) => res.json());
  }

  getDocuments(tag, reverse): Observable<any> {
    return this.http.get(
      `${this.version}/document/_ls?r=true&tag=${tag}&reverse=${reverse}`,
    )
    .catch(this.formatErrors)
    .map((res) => res.json());
  }

  getDocDetail(url): Observable<any> {
    return this.http.get(
      `${this.version}/${url}`,
      { headers: this.headers },
    )
    .catch(this.formatErrors)
    .map((res) => res.json());
  }

  getDocTree(url): Observable<any> {
    return this.http.get(
      `${this.version}/${url}`,
      { headers: this.headers },
    )
    .catch(this.formatErrors)
    .map((res) => res.json());
  }

  docsSearch(data): Observable<any> {
    return this.http.post(
      `${this.version}/search`,
      JSON.stringify(data),
      { headers: this.headers },
    )
    .catch(this.formatErrors)
    .map((res) => res.json());
  }

  getDocSheet(): Observable<any> {
    return this.http.get(
      '/assets/styles/css/sheet.css',
      { headers: this.headers },
    )
    .catch(this.formatErrors)
    .map((res) => res);
  }
}
