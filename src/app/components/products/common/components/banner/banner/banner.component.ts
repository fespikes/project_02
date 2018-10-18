import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, NavigationStart, RoutesRecognized } from '@angular/router';
import { toggles } from 'toggles';

@Component({
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})
export class BannerComponent implements OnInit {

  data: any;
  private offsetX = 0;
  private offsetY = 0;
  oem: any;
  isDataMart: boolean;
  path: string;

  constructor(
    private element: ElementRef,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.oem = toggles.oem;

    // in case of have apply button only on data-mart
    this.isDataMart = true;
    this.path = this.router.url.split('/').pop();
    // this.isDataMart = (this.router.url.indexOf('data-mart')>-1) && !!this.oem;
  }

  onMousemove(event: MouseEvent) {
    const factor = 50;
    const { movementX, movementY } = event;
    const img: HTMLImageElement = this.element.nativeElement.querySelector('.image');
    if (!img) {
      return;
    }

    this.offsetX += movementX / factor;
    this.offsetY += movementY / factor;
    const translateX = `${- this.offsetX}px`;
    const translateY = `${- this.offsetY}px`;
    img.style.transition = '';
    img.style.transform = `translate(${translateX}, ${translateY})`;
  }

  onMouseleave(event: MouseEvent) {
    this.offsetX = 0;
    this.offsetY = 0;
    const img: HTMLImageElement = this.element.nativeElement.querySelector('.image');
    img.style.transition = 'all 0.5s';
    img.style.transform = `translate(0, 0)`;
  }
}
