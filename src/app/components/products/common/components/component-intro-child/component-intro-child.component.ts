import { Component, AfterViewInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ComponentIntroChildDirective } from './component-intro-child.directive';
import { ComponentIntroChildComponent as TheComponent } from './component-intro-child/component-intro-child.component';

@Component({
  templateUrl: './component-intro-child.component.html',
  // styleUrls: ['./component-intro-child.component.sass']
})
export class ComponentIntroChildComponent implements AfterViewInit {

  data: any;

  @ViewChild(ComponentIntroChildDirective)
  componentIntroChild: ComponentIntroChildDirective;

  constructor(protected componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    setTimeout( _ => this.loadComponent(), 1);
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TheComponent);

    const viewContainerRef = this.componentIntroChild.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<TheComponent>componentRef.instance).data = this.data;

  }

}
