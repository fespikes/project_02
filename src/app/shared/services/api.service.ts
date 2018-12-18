
import {map,  catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { PartialCollection } from '../models';

@Injectable()
export class TdcApiService {
  constructor(private http: HttpClient) {
    this.formatErrors = this.formatErrors.bind(this);
  }

  private get headers(): HttpHeaders {
    return new HttpHeaders({
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json;charset=UTF-8',
    });
  }

  private makeUrl(url) {
    const separator = '/';
    const replace   = new RegExp(separator + '{1,}', 'g');
    return ['v2/', url].join(separator).replace(replace, separator);
  }

  private formatErrors(error: any) {
    // const message = error.error instanceof ErrorEvent ?
    const message = error.error.message ?
      error.error.message : `server returned code ${error.status} with body "${error.error}"`;

    console.error(message);
    return throwError(error);
  }

  setQueryParams(p, all?: boolean) {
    const obj: any = {
      params: new HttpParams(),
      headers: this.headers,
    };
    if (p) {
      Object.keys(p).map((key) => {
        if (!!p[key] || typeof p[key] !== 'undefined') {
          const element = p[key];
          obj.params = obj.params.set(key, element);
        }
      });
    }
    if (!!all) {
      obj.observe = 'response';
    }
    return obj;
  }

  dataAdjustment(res) {
    return res;
  }

  /* get(path: string, params: Object = {}): Observable<any> {
    const queryParams = this.setQueryParams(params);
    return this.http.get(this.makeUrl(path), queryParams)
      .pipe(
        catchError(this.formatErrors),
      ).map(res => res);
  } */
  get(url: string, params: Object = {}, isFullUrl?): Observable<any> {
    const queryParams = this.setQueryParams(params);
    const path = isFullUrl ? url : this.makeUrl(url);
    return this.http.get(path, queryParams)
      .pipe(
        catchError(this.formatErrors),
      ).pipe(map(res => this.dataAdjustment(res)));
  }

  getAll(path: string, params: Object = {}): Observable<PartialCollection> {
    params['size'] = Math.pow(2, 31) - 1;
    params['page'] = 1;
    return this.get(path, params);
  }

  // getText(path: string, params: Object = {}): Observable<any> {
  //   const queryParams = this.setQueryParams(params);
  //   return this.http.get(this.makeUrl(path), queryParams)
  //   .pipe(this.formatErrors)
  //   .map((res: Response) => res.text());
  // }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      this.makeUrl(path),
      JSON.stringify(body),
      { headers: this.headers },
    )
    .pipe(
      catchError(this.formatErrors),
    );
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      this.makeUrl(path),
      JSON.stringify(body),
      { headers: this.headers },
    )
    .pipe(
      catchError(this.formatErrors),
    );
  }

  delete(path): Observable<any> {
    return this.http.delete(
      this.makeUrl(path),
      { headers: this.headers },
    )
    .pipe(
      catchError(this.formatErrors),
    );
  }
}
