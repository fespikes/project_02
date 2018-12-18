import { Component, HostBinding } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationStart,
  RoutesRecognized,
  NavigationEnd
} from '@angular/router';

@Component({
  selector: 'tdc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {

  @HostBinding('class.tdc-root-box') layout = true;

  routerState = true;
  routerStateCode = 'active';

  title = 'tdc';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {

    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        scrollTo(0, 0);
      }

      if (e instanceof RoutesRecognized) {
      }

      if (e instanceof NavigationEnd) {
        // TODO:
        // this.routerState = !this.routerState;
        // this.routerStateCode = this.routerState ? 'active' : 'inactive';
      }

    });

  }

}
