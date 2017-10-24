import { Component, OnInit, Input } from '@angular/core';
import { BannerComponent } from '../../common/components/banner/banner.component';

@Component({
  selector: 'info-retrieval-banner',
  templateUrl: '../../common/components/banner/banner.component.html',
})
export class InfoRetrievalBannerComponent extends BannerComponent implements OnInit{

  @Input()
  productDetails:any;

  ngOnInit() {
    this.data = this.productDetails.banner;
  }

}
