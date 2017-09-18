import { Component, OnInit, Input } from '@angular/core';
import { BannerInterface } from '../banner-interface';

@Component({
  selector: 'tdc-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})
export class BannerComponent implements BannerInterface, OnInit {

	@Input() data: any;

	ngOnInit() {
		console.log(this.data);
	}

}
