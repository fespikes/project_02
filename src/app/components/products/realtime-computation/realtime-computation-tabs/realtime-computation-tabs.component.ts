
import { Component, OnInit, Input } from '@angular/core';
import { TabsComponent } from '../../common/components/tabs/tabs.component';

@Component({
	selector: 'realtime-computation-tabs',
	templateUrl: '../../common/components/tabs/tabs.component.html'
})
export class RealtimeComputationTabsComponent extends TabsComponent implements OnInit {

	@Input()
	productDetails: any;

	ngOnInit() {
		this.data = this.productDetails.tabs;
	}

}
