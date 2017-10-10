import { Component } from '@angular/core';

@Component({
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass'],
})
export class GalleryComponent {
  navs = [
    'icon',
    'avatar',
    'button',
    'carousel',
    'dropdown',
    'form',
    'pagination',
    'table',
    'submenu',
    'message',
    'modal',
    'tab',
    'layout',
    'property',
    'select',
    'input',
    'filtering',
    'loading',
    'datepicker',
  ].sort();
}
