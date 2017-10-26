import { Component, Input, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { RealtimeComputationService } from '../realtime-computation.service';
import { BannerComponent } from '../../common/components/banner/banner.component';

@Component({
  selector: 'realtime-computation-banner',
  templateUrl: '../../common/components/banner/banner.component.html',
})
export class RealtimeComputationBannerComponent extends BannerComponent implements OnInit{
  
  @Input()
  productDetails:any;

  ngOnInit() {
    this.data = this.productDetails.banner;
  }

}
