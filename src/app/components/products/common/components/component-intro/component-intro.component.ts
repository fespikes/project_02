import { Component, AfterViewInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ComponentIntroDirective } from './component-intro.directive';
import { ComponentIntroComponent as TheComponent } from './component-intro/component-intro.component';

@Component({
  templateUrl: './component-intro.component.html',
  styleUrls: ['./component-intro.component.sass']
})
export class ComponentIntroComponent implements AfterViewInit {

  protected data: any;

  @ViewChild(ComponentIntroDirective)
  componentIntro: ComponentIntroDirective;

  constructor(protected componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    setTimeout( _ => this.loadComponent(), 1);
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TheComponent);

    const viewContainerRef = this.componentIntro.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<TheComponent>componentRef.instance).data = this.data;

  }

}
