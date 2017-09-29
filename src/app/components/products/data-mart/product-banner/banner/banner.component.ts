import { Component, Input } from '@angular/core';
import { BannerInterface } from '../banner-interface';

@Component({
  selector: 'tdc-banner',
  templateUrl: './banner.component.html',
  styleUrls: [/*'../../data-mart.common.sass',*/ './banner.component.sass']
})
export class BannerComponent implements BannerInterface {

	@Input() data: any;

}
