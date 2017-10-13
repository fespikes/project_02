import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../../environments/environment';

@Injectable()
export class GalleryGuard implements CanLoad {

  constructor() { }

  canLoad(): boolean {
    return !environment.production;
  }

}
