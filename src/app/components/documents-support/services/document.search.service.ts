import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { TdcApiService } from '../../../shared/services/api.service';

@Injectable()
export class DocumentSearchService {
  constructor(private api: TdcApiService) {

  }

  //getDocsFolder(): Observable<any> {
  //  return this.api.get('/v2/document/_ls?r=true');
  //}

  //searchDocs(): Observable<any> {
  //  return this.api.get('search?keywords=io');
  //}

  searchDocs() {
    this.api.get('v2/search?keywords=io');
  }

}
