import { Component, AfterViewInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ScenariosDirective } from './scenarios.directive';
import { ScenariosComponent as TheComponent } from './scenarios/scenarios.component';

@Component({
  templateUrl: './scenarios.component.html',
  styleUrls: ['./scenarios.component.sass']
})
export class ScenariosComponent implements AfterViewInit {

	@ViewChild(ScenariosDirective) scenarios: ScenariosDirective;

	protected data:any;

  constructor(protected componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
		setTimeout( _ => this.loadComponent(), 1);
  }

  loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(TheComponent);

    let viewContainerRef = this.scenarios.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<TheComponent>componentRef.instance).data = this.data;

  }

}
