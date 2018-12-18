import { Component, AfterViewInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AdvantagesDirective } from './advantages.directive';
import { AdvantagesComponent as TheComponent } from './advantages/advantages.component';

@Component({
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.sass']
})
export class AdvantagesComponent implements AfterViewInit {

  data: any;

  @ViewChild(AdvantagesDirective)
  advantages: AdvantagesDirective;

  constructor(protected componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    setTimeout( _ => this.loadComponent(), 1);
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TheComponent);

    const viewContainerRef = this.advantages.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<TheComponent>componentRef.instance).data = this.data;

  }

}
