import { Component, AfterViewInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ScenariosChildDirective } from './scenarios-child.directive';
import { ScenariosChildComponent as TheComponent } from './scenarios-child/scenarios-child.component';

@Component({
  // selector: 'tdc-scenarios-child',
  templateUrl: './scenarios-child.component.html',
  // styleUrls: ['./scenarios-child.component.sass']
})
export class ScenariosChildComponent implements AfterViewInit {
	
	data: any;

  @ViewChild(ScenariosChildDirective)
  scenariosChild: ScenariosChildDirective;

  constructor(protected componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
		setTimeout( _ => this.loadComponent(), 1);
  }

  loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(TheComponent);

    let viewContainerRef = this.scenariosChild.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    
    const data = this.data;

    if (data.image){
      (<TheComponent>componentRef.instance).data = {
        text: data.text,
        hasImage: true,
        image: {
          src: data.image.src,
          width: data.image.style.width,
          height: data.image.style.height
        }
      }
    } else {
      (<TheComponent>componentRef.instance).data = {
        hasImage: false,
        text: data.text,
      }
    }

  }

}
