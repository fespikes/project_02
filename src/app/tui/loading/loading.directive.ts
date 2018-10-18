import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[tccLoading]',
})
export class LoadingDirective implements OnChanges {
  @Input() tccLoading;
  @Input() tccLoadingHeight;

  constructor(private elementRef: ElementRef) {
    const hostPosition = this.elementRef.nativeElement.style.position;
    if (hostPosition !== 'absolute' || hostPosition !== 'relative') {
      this.elementRef.nativeElement.style.position = 'relative';
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const {
      tccLoading: loadingChanges,
    } = changes;

    if (loadingChanges) {
      if (loadingChanges.currentValue) {
        this.showLoading();
      } else {
        this.hideLoading();
      }
    }
  }

  showLoading() {
    // 创建loading svg icon
    const loadingIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const loadingIconUse: SVGUseElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    loadingIconUse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#loading');
    loadingIcon.classList.add('tcc-rotate');
    loadingIcon.classList.add('tcc-loading');
    loadingIcon.appendChild(loadingIconUse);

    // 创建icon的外部容器用于布局
    const container = document.createElement('div');
    container.classList.add('tcc-loading-container');
    container.classList.add('fuck');
    container.appendChild(loadingIcon);

    container.style.position = 'absolute';
    container.style.top = '50%';
    container.style.left = '50%';
    container.style.marginLeft = '-50px';
    container.style.marginTop = '-50px';
    loadingIcon.style.width = '32px';
    loadingIcon.style.height = '32px';

    if (this.tccLoadingHeight) {
      container.style.height = this.tccLoadingHeight;
    }

    this.elementRef.nativeElement.appendChild(container);
    this.elementRef.nativeElement.classList.add('tcc-loading-active');
  }

  hideLoading() {
    const container = this.elementRef.nativeElement.querySelector('.tcc-loading-container');
    if (container) {
      this.elementRef.nativeElement.removeChild(container);
      this.elementRef.nativeElement.classList.remove('tcc-loading-active');
    }
  }
}
