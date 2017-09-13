import {
  Directive,
  Input,
} from '@angular/core';

@Directive({
  selector: '[tccTabPane]',
})
export class TabPaneDirective {
  @Input() tccTabPane: string;
}
