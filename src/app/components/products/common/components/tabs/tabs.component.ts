import { Component, AfterViewInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { TabsDirective } from './tabs.directive';
import { TabsComponent as TheComponent } from './tabs/tabs.component';

@Component({
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent implements AfterViewInit {


  @ViewChild(TabsDirective) tabs: TabsDirective;

  protected data: any;

  constructor(protected componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    setTimeout( _ => this.loadComponent(), 1);
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TheComponent);

    const viewContainerRef = this.tabs.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<TheComponent>componentRef.instance).tabs = this.data;

  }

}
