import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchComponent } from './common/search/search.component';

@Component({
  selector: 'tdc-documents-support',
  templateUrl: './documents-support.component.html',
  styleUrls: ['./documents-support.component.sass']
})
export class DocumentsSupportComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  documentSearch() {
    this.router.navigate(['/documents-support/docs-search']);
  }
}
