import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';

import { FunctionalitiesComponent } from '../../common/components/functionalities/functionalities.component';

import { DataMartService } from '../data-mart.service';

@Component({
  templateUrl: '../../common/components/functionalities/functionalities.component.html',
  styleUrls: ['./data-mart-functionalities.component.sass']
})
export class DataMartFunctionalitiesComponent extends FunctionalitiesComponent /*implements OnDestroy */{

  constructor(
  	componentFactoryResolver: ComponentFactoryResolver,
  	private dataMartService: DataMartService,
  	private el: ElementRef 
  ) {
  	super(componentFactoryResolver);
  }

  ngOnInit() {
  	const productDetails = this.dataMartService.getProductDetails();
  	this.data = productDetails.functionalities;

  	console.log( 'this.functionalities.viewContainerRef:', this.functionalities.viewContainerRef );
  }

  ngAfterViewInit() {
  	setTimeout( _ => this.loadComponent(), 1);
  	console.log( 'fuck you here:', this.el.nativeElement )
  }
  // ngOnDestroy() { }
}
