import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'tdc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {

  @HostBinding('class.tdc-root-box') layout = true;

  title = 'tdc';

}
