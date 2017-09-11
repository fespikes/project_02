import {
  OnInit,
  Directive,
  ViewContainerRef,
  TemplateRef,
  Input,
  HostBinding,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[tccTabPane]',
})
export class TabPaneDirective implements OnInit {
  @Input() tccTabPane: string;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<TabPaneDirective>,
  ) { }

  ngOnInit() {
    this.hide();
  }

  show() {
    this.viewContainerRef.createEmbeddedView(this.template);
  }

  hide() {
    this.viewContainerRef.clear();
  }

}
