import { Component, OnInit, Input } from '@angular/core';
import { TabsComponent } from '../../common/components/tabs/tabs.component';

@Component({
  selector: 'data-warehouse-tabs',
  templateUrl: '../../common/components/tabs/tabs.component.html'
})
export class DataWarehouseTabsComponent extends TabsComponent implements OnInit {

  @Input()
  productDetails: any;

  ngOnInit() {
  	this.data = this.productDetails.tabs;
  }

}
