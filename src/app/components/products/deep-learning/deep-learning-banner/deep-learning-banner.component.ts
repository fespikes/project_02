import { Component, Input, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { DeepLearningService } from '../deep-learning.service';
import { BannerComponent } from '../../common/components/banner/banner.component';

@Component({
  selector: 'deep-learning-banner',
  templateUrl: '../../common/components/banner/banner.component.html',
})
export class DeepLearningBannerComponent extends BannerComponent implements OnInit{
  
  @Input()
  productDetails:any;

  ngOnInit() {
    this.data = this.productDetails.banner;
  }

}
