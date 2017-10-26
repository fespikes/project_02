import { Component, Input, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { RelationalDatabaseService } from '../relational-database.service';
import { BannerComponent } from '../../common/components/banner/banner.component';

@Component({
  selector: 'relational-database-banner',
  templateUrl: '../../common/components/banner/banner.component.html',
})
export class RelationalDatabaseBannerComponent extends BannerComponent implements OnInit{
  
  @Input()
  productDetails:any;

  ngOnInit() {
    this.data = this.productDetails.banner;
  }

}
