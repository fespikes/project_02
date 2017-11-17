import { Component, HostBinding } from '@angular/core';
import {
	Router, 
	ActivatedRoute,
	NavigationStart,
	RoutesRecognized,
	NavigationEnd
} from "@angular/router";

import { routeAnimation } from './components/common/animations/animations';

@Component({
  selector: 'tdc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [routeAnimation]
})
export class AppComponent {

  @HostBinding('class.tdc-root-box') layout = true;

  routerState: boolean = true;
  routerStateCode: string = 'active';

  title = 'tdc';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {

  	this.router.events.subscribe(e=>{
  		if(e instanceof NavigationStart){
  			console.log('NavigationStart');
  		}

  		if(e instanceof RoutesRecognized){
  			console.log('RoutesRecognized');
  		}

  		if(e instanceof NavigationEnd){
  			console.log('NavigationEnd:');

  			this.routerState = !this.routerState;
  			this.routerStateCode = this.routerState ? 'active' : 'inactive';
  		}

  	});

  }

}
