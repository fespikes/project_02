import * as path from 'path';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TdcApiService {
  constructor(private http: Http) {}

  private get headers(): Headers {
    return new Headers({
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json;charset=UTF-8',
    });
  }

  // 请求前缀
  private makeUrl(url) {
    console.log(path.join('v2/', url));
    return path.join('v2/', url);
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

  //get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
  //  return this.http.get(this.makeUrl(path), { headers: this.headers, search: params })
  //  .catch(this.formatErrors)
  //  .map((res: Response) => {
  //    console.log('res.json=', res.json());
  //    res.json()
  //  });
  //}

  get(path: string) {
    this.http.get(path).map(
      res => res.json()
    ).subscribe(result => {
      console.log('result=', result);
    });
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

  delete(path): Observable<any> {
    return this.http.delete(
      this.makeUrl(path),
      { headers: this.headers },
    )
    .catch(this.formatErrors)
    .map((res: Response) => res.json());
  }
}
