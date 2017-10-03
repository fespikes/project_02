import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'document-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.sass']
})

export class BreadcrumbComponent implements OnInit {
  @Input() crumbItems: any[];
  constructor() {

  }

  ngOnInit() {

  }
}
