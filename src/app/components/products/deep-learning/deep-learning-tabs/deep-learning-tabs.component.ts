import { Component, OnInit, Input } from '@angular/core';
import { TabsComponent } from '../../common/components/tabs/tabs.component';

@Component({
  selector: 'deep-learning-tabs',
  templateUrl: '../../common/components/tabs/tabs.component.html'
})
export class DeepLearningTabsComponent extends TabsComponent implements OnInit {

  @Input()
  productDetails: any;

  ngOnInit() {
    this.data = this.productDetails.tabs;
  }

}
