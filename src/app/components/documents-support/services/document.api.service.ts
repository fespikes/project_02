import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class DocumentAPIService {
  private version = '/docs/v2';

  constructor(
    private http: HttpClient,
  ) {}

  private get headers(): HttpHeaders {
    return new HttpHeaders({
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
    return throwError(data);
  }

  getSearchTreeModel(): Observable<any> {
    return this.http.get(
      `${this.version}/document/_ls?r=true&reverse=true`,
    )
    .pipe(
      catchError(this.formatErrors),
    );
  }

  getDocuments(tag, reverse): Observable<any> {
    return this.http.get(
      `${this.version}/document/_ls?r=true&tag=${tag}&reverse=${reverse}`,
    )
    .pipe(
      catchError(this.formatErrors),
    );
  }

  getDocDetail(url): Observable<any> {
    return this.http.get(
      `${this.version}/${url}`,
      { headers: this.headers },
    )
    .pipe(
      catchError(this.formatErrors),
    );
  }

  getDocTree(url): Observable<any> {
    return this.http.get(
      `${this.version}/${url}`,
      { headers: this.headers },
    )
    .pipe(
      catchError(this.formatErrors),
    );
  }

  docsSearch(data): Observable<any> {
    return this.http.post(
      `${this.version}/search`,
      JSON.stringify(data),
      { headers: this.headers },
    )
    .pipe(
      catchError(this.formatErrors),
    );
  }

  getDocSheet(): Observable<any> {
    return this.http.get(
      '/assets/styles/css/sheet.css',
      { headers: this.headers },
    )
    .pipe(
      catchError(this.formatErrors),
    );
  }
}
