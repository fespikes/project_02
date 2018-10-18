import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable }         from 'rxjs';
import { map }                  from 'rxjs/operators';
import 'rxjs/add/observable/combineLatest';
import { filter } from 'rxjs/operators';

import { TdcApiService } from 'app/shared';
import { Application } from './application.model';

@Injectable()
export class ApplicationService {
	private application: Application = new Application;
  applicationKey = 'tdcweb:application';

  constructor(
  	private api: TdcApiService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  applicationMixin(obj?) {
    const key = this.applicationKey;
    if (!!obj) {
    	this.application = {...this.application, ...obj};
      window.localStorage.setItem(key, JSON.stringify(this.application));
    } else {
      if (window.localStorage.getItem(key)) {
        this.application = JSON.parse((window.localStorage.getItem(key)));
      }
    }
    return this.application;
  }

  applicationStorageClear() {
    const key = this.applicationKey;
    delete this.application;
    this.application = new Application;
    window.localStorage.removeItem(key);
  }

  getRouterParams(cb?) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    )
      .subscribe(() => {
        const promises = [
          this.route.params,
          this.route.queryParams,
        ];

        Observable.combineLatest(promises)
          .subscribe(([pathParams, queryParams]) => {
            cb && cb(queryParams);
          });
     });

    const queryParams: any = this.route.queryParams;
    return queryParams.value;
  }

  getProductsByCategory(categoryName): Observable<any> {
    return this.api.fetch(`categories/${categoryName}/products` );
  }

  getTemplatesByUUID(uuid): Observable<any> {
    return this.api.fetch(`products/${uuid}/templates` );
  }

  getResourceConfig(id, param): Observable<any> {
    return this.api.push(`templates/${id}/tcu`, {...param} );
  }

  projectApply(val): Observable<any> {
    return this.api.push(`projects/apply`, {...val});
  }

}
