import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/skipWhile';

import { TdcApiService } from './api.service';
import { AuthPerms } from './auth-perm';

interface Perm {
  permType: string;
  action: string;
  description: string;
}

export class AuthUser {
  username: string;
}

@Injectable()
export class TccAuthService {
  private userSubject = new BehaviorSubject<AuthUser>(null);

  /** 用户信息 */
  user = this.userSubject.asObservable()
  .skipWhile((user: AuthUser) => user === null)
  .distinctUntilChanged();

  private permsSubject = new BehaviorSubject<AuthPerms>(null);

  /** 当前用户拥有的权限 */
  perms = this.permsSubject.asObservable()
  .skipWhile((perms: AuthPerms) => perms === null)
  .distinctUntilChanged();

  /** 标记当前是否处于登录状态 */
  private logged = false;

  constructor(
    private http: Http,
    private api: TdcApiService,
  ) { }

  setPerms(perms: Perm[]) {
    const newPerms = new AuthPerms();
    perms.forEach((perm: Perm) => {
      const {permType, action} = perm;
      try {
        newPerms[permType][action] = true;
      } catch (e) {
        // noop
      }
    });
    this.permsSubject.next(newPerms);
  }

  setAuth(user: AuthUser) {
    this.logged = true;
    this.userSubject.next(user);
  }

  purge() {
    this.logged = false;
    this.userSubject.next(new AuthUser());
    this.permsSubject.next(new AuthPerms());
  }

  /**
   * 用于AuthGuard和NoAuthGuard路由守卫，区分公共页面和权限页面
   */
  isAuthenticated(): Observable<boolean> {
    if (this.logged) {
      return Observable.of(true);
    }
    return this.getUserInfoAndPerms()
    .map(() => {
      return true;
    })
    .catch((err) => {
      return Observable.of(false);
    });
  }

  /**
   * 请求当前用户信息和权限的操作逻辑
   * 当请求成功时，标记为登录状态，当请求失败时，标记为未登录状态
   */
  getUserInfoAndPerms() {
    return this.api.get('users/current')
    .map((user: AuthUser) => {
      const {username} = user;
      this.setAuth(user);
      return username;
    })
    .mergeMap((username: string) => {
      return this.api.get(`users/${username}/perms`)
      .map((perms: Perm[]) => {
        this.setPerms(perms);
      });
    })
    .catch((err) => {
      this.purge();
      return Observable.throw(err);
    });
  }

  /**
   * 在一些需要具体权限才能通过的路由守卫中可以调用这个api
   * @param perm {string} 权限字符串，比如`DataAssetPerm.READ`
   * @return {Observable<boolean>} 当前用户是否有该权限
   */
  checkPerm(perm: string): Observable<boolean> {
    if (!perm) {
      return Observable.of(false);
    }
    return this.perms.map((perms: AuthPerms) => {
      try {
        const permArr = perm.split('.');
        return permArr.reduce((ret: any, key: string) => ret[key], perms) === true;
      } catch (e) {
        return false;
      }
    });
  }

  login(body: {username: string, password: string}) {
    return this.http.post('/login', body)
    .map((res: Response) => {
      const cookie = res.json().find((c) => {
        const {name} = c;
        return name === 'TCCSESSIONID';
      });
      if (cookie) {
        const {name, value} = cookie;
        document.cookie = `${name}=${value}`;
      }
    });
  }

  logout() {
    document.cookie = 'TCCSESSIONID=1; max-age=0';
    this.purge();
    return Observable.of(true);
  }

}
