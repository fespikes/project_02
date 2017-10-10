import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { TccAuthService } from './auth.service';

@Injectable()
export class NoAuthGuard implements CanActivate {

  constructor(
    private authService: TccAuthService,
  ) { }

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated()
    .map((authenticated: boolean) => {
      return !authenticated;
    });
  }
}
