/**
 * tcc-carousel 借鉴自 NG-ZORRO 0.5.0-rc.2
 *
 */

import {
  Component,
  OnInit,
  OnDestroy,
  ContentChildren,
  HostBinding,
  ViewChild,
  ElementRef,
  Renderer2,
  HostListener,
  Input,
  QueryList,
} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { SubmenuService } from '../submenu';

import { CarouselContentDirective } from './carousel-content.directive';

@Component({
  selector: 'tcc-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  private sizeSubject = new Subject();
  private ngUnsubscribe = new Subject();
  private submenuSub: Subscription;
  private activeIndex = 0;
  private transform = 'translate3d(0px, 0px, 0px)';
  private rendering = false;
  private slideContents: QueryList<CarouselContentDirective>;

  @ContentChildren(CarouselContentDirective)
  set _slideContents(value) {
    this.slideContents = value;
    this.renderContent();
  }

  @ViewChild('slickList') slickList: ElementRef;
  @ViewChild('slickTrack') slickTrack: ElementRef;
  @Input() loading = false;
  @Input() showDots = true;
  @Input() showNav = true;

  @HostBinding('class.tcc-carousel') host = true;
  @HostBinding('class.loading') get loadingClass() {
    return this.loading;
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    this.sizeSubject.next();
  }

  constructor(
    private hostElement: ElementRef,
    private renderer: Renderer2,
    private submenu: SubmenuService,
  ) { }

  ngOnInit() {
    this.sizeSubject
    .debounceTime(100)
    .takeUntil(this.ngUnsubscribe)
    .subscribe(() => {
      this.renderContent();
    });

    this.submenuSub = this.submenu.onToggle
    .subscribe(() => {
      this.renderContent();
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
    this.submenuSub.unsubscribe();
  }

  renderContent() {
    this.rendering = true;
    setTimeout(_ => {
      if (this.slideContents.length > 0) {
        this.setActive(this.activeIndex);
      }

      this.slideContents.forEach((content, i) => {
        content.width = this.hostElement.nativeElement.offsetWidth;
      });

      this.renderer.removeStyle(this.slickList.nativeElement, 'height');
      this.renderer.setStyle(
        this.slickList.nativeElement,
        'height',
        `${this.hostElement.nativeElement.offsetHeight}px`,
      );
      this.renderer.removeStyle(this.slickTrack.nativeElement, 'width');
      this.renderer.setStyle(
        this.slickTrack.nativeElement,
        'width',
        `${this.slideContents.length * this.hostElement.nativeElement.offsetWidth}px`,
      );

      this.rendering = false;
    });
  }

  setActive(i, content?) {
    this.activeIndex = i;
    if (!content) {
      content = this.slideContents.toArray()[this.activeIndex];
    }

    this.transform = `translate3d(${-this.activeIndex * this.hostElement.nativeElement.offsetWidth}px, 0px, 0px)`;

    this.slideContents.forEach(slide => {
      slide.isActive = false;
    });
    content.isActive = true;
  }

  get empty() {
    return this.slideContents && this.slideContents.length === 0;
  }

  get needNagivation() {
    return this.slideContents && this.slideContents.length > 1;
  }

  get canNavigateNext() {
    return this.activeIndex + 1 < this.slideContents.length;
  }

  navigateNext() {
    const index = this.activeIndex + 1;
    this.setActive(index);
  }

  get canNavigatePrev() {
    return this.activeIndex > 0;
  }

  navigatePrev() {
    const index = this.activeIndex - 1;
    this.setActive(index);
  }
}
