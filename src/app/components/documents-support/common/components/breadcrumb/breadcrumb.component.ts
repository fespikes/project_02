import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'tdc-document-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.sass'],
})

export class BreadcrumbComponent implements OnInit {
  @HostBinding('class.breadcrumb') hostClass = true;

  @Input() crumbItems: any[];
  constructor() {

  }

  ngOnInit() {

  }
}
