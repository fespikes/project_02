import { Component, OnInit, ElementRef } from '@angular/core';

import { ProductIntroduceComponent } from './introduce/product-introduce.component';
import { ProductAdvantageComponent } from './advantage/product-advantage.component';
import { TabComponent } from '../../common/components/tab/tab.component';

import { ProductBannerService } from '../services/product-banner.service';
import { ProductUtilService } from '../services/product-util.service';
import { ProductResService } from '../services/product-res.service';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
})
export class ProductComponent implements OnInit {

  bannerInfo = {
    alias: '',
    title: '',
    subTitle: '',
    logoUrl: '',
  };
  tabItems = [];
  MODULE_INTRODUCE_TAG = 'tdc-product-introduce';
  MODULE_ADVANTAGE_TAG = 'tdc-product-advantage';

  ANCHOR_TOP = 402; // topNav height plus banner height
  TAB_HEIGHT = 56;
  private offsetX = 0;
  private offsetY = 0;

  constructor(
    private productBannerService: ProductBannerService,
    private productUtilService: ProductUtilService,
    private productResService: ProductResService,
    private element: ElementRef,
  ) {

  }

  ngOnInit() {
    const moduleType = this.productUtilService.getModuleType(window.location.hash);
    this.bannerInfo = this.productBannerService.getModuleBannerInfo(moduleType);
    this.tabItems = this.productResService.getModuleTabItems();
  }

  onTabChange(tab) {
    this.anchorContent(tab);
  }

  anchorContent(tab) {
    const anchorTag = tab.tabName === 'advantage' ? this.MODULE_ADVANTAGE_TAG
      : this.MODULE_INTRODUCE_TAG;
    const scrollTop = this.getScrollTop(tab.tabName, tab.className);
    this.productUtilService.anchorTabContent(anchorTag, scrollTop);
  }

  getScrollTop(tabName, className) {
    let scrollTop = this.ANCHOR_TOP;
    if (className === 'tab-ul') {
      if (tabName === 'introduce') {
        scrollTop = this.ANCHOR_TOP - this.TAB_HEIGHT;
      } else if (tabName === 'advantage') {
        scrollTop = this.ANCHOR_TOP - 2 * this.TAB_HEIGHT;
      }
    }else if (className === 'fixed') {
      if (tabName === 'introduce') {
        scrollTop = this.ANCHOR_TOP;
      }else if (tabName === 'advantage') {
        scrollTop = this.ANCHOR_TOP - this.TAB_HEIGHT;
      }
    }
    return scrollTop;
  }

  onMousemove(event: MouseEvent) {
    const factor = 30;
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

  onMouseleave() {
    this.offsetX = 0;
    this.offsetY = 0;
    const img: HTMLImageElement = this.element.nativeElement.querySelector('.banner-image');
    img.style.transition = 'all 0.5s';
    img.style.transform = `translate(0, 0)`;
  }
}
