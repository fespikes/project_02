import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { TccAuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: TccAuthService,
    private router: Router,
  ) { }

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated()
    .map((authenticated: boolean) => {
      if (!authenticated) {
        this.router.navigate(['/login']);
      }
      return authenticated;
    });
  }

}
