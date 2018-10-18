import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable }         from 'rxjs';
import { map }                  from 'rxjs/operators';

import { ApplicationService } from '../application.service';

@Component({
  selector: 'tdc-apply-options',
  templateUrl: './apply-options.component.html',
  styleUrls: ['./apply-options.component.sass']
})
export class ApplyOptionsComponent implements OnInit {

	path: string;
	type: string;

  constructor(
    private service: ApplicationService
  ) {}

  ngOnInit() {
    const queryParams: any = this.service.getRouterParams(queryParams => {
      this.path = queryParams.path;
      this.type = queryParams.type;
    });

    this.path = queryParams.path;
    this.type = queryParams.type;
    this.service.applicationStorageClear();
  }

}
