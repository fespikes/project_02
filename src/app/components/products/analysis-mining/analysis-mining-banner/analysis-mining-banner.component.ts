import { Component, Input, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { AnalysisMiningService } from '../analysis-mining.service';
import { BannerComponent } from '../../common/components/banner/banner.component';

@Component({
  selector: 'analysis-mining-banner',
  templateUrl: '../../common/components/banner/banner.component.html',
})
export class AnalysisMiningBannerComponent extends BannerComponent implements OnInit{
  
  @Input()
  productDetails:any;

  ngOnInit() {
    this.data = this.productDetails.banner;
  }

}
