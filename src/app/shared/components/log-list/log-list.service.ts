import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Pagination } from '../../../tui';
import { TccApiService } from '../../services';

export class Operation {
  displayMsg: string;
  id: number;
  msgArgs: object;
  msgCode: string;
  operateTime: number;
  operator: string;
  projectId: number;
}

export class OperationResponse {
  data: Operation[];
  pagination: Pagination;
}

@Injectable()
export class LogListService {

  constructor(
    private api: TccApiService,
  ) { }

  getLogs(page: number, size: number, projectId?: number): Observable<OperationResponse> {
    const params = {
      page: page,
      size: size,
    };

    if (projectId) {
      params['projectId'] = projectId;
    }

    return this.api.get('operations', params);
  }

}
