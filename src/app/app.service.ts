import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TdcApiService } from 'app/shared/services';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  isLoggedIn = false;
  redirectUrl: string;

  constructor(
    private api: TdcApiService,
  ) {}

  login(body): Observable<boolean> {
    return this.api.post('api/v1/login', {
      password: body.password,
      username: body.username,
    }, true).pipe(
      map(res => {
        if (res.result === 'success') {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
        return true;
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }

}
