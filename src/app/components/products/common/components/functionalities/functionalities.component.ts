import { Component, AfterViewInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { FunctionalitiesDirective } from './functionalities.directive';
import { FunctionalitiesComponent as TheComponent } from './functionalities/functionalities.component';

@Component({
  templateUrl: './functionalities.component.html',
  styleUrls: ['../../products.layout.sass', './functionalities.component.sass']
})
export class FunctionalitiesComponent implements AfterViewInit {

	data: any;

  @ViewChild(FunctionalitiesDirective)
  functionalities: FunctionalitiesDirective;

  constructor(protected componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
		setTimeout( _ => this.loadComponent(), 1);
  }

  loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(TheComponent);

    let viewContainerRef = this.functionalities.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<TheComponent>componentRef.instance).data = this.data;

  }

}
