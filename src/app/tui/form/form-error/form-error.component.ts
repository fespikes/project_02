import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'tcc-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.sass'],
})
export class FormErrorComponent {
  @HostBinding('class.tcc-form-error') hostClass = true;
  @Input() validationResults: Object[];
  @Input() errorMsgs = [];
}
