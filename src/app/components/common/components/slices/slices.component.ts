import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import * as Hammer from 'hammerjs';
import { Manager, Swipe } from 'hammerjs';

@Component({
  selector: 'tui-slices-modules',
  templateUrl: './slices.component.html',
  styleUrls: ['./slices.component.sass'],
  outputs: ['onItemSelected'],

  host: {
  	class: 'tui-slices-modules'
  },
})
export class SlicesComponent implements OnInit {
/**
* 如果是移动端：
  this.bindForResponsive(this.ulItems);
  this.bindForResponsive(this.ulSwap);

*/

  static config = {
    itemWidth: 400,//*
    defaultLength: 3,//*
    gap: 0,
    direction: true, //go right
    hoverClassName: 'current',//*
    wrapperClassName: 'h600',//*
    time: 4000
  };

  @Input()
	data: any;//TODO:
  currentItem: any;

	interval: any;
	items: any;
	// style: any;
	itemsLength: number;    //how many items of the products list
	itemsWidth: number;    //
  itemWidth: number;
  windowWidth: number;
  swipWidth: number;

	ulItems: any;
  ulSwap: any;
  needArrow: boolean;

  //for hover status related
  targetClassName: string;
  hoverClassName: string;

  @Output() onItemSelected?: EventEmitter<any>;

  constructor(
  	private el:ElementRef
  ) {
    this.onItemSelected = new EventEmitter();
  }

  // when is phone, need to add item width to make the item device width.
  ngOnInit() {
    const config = {...SlicesComponent.config, ...this.data.config};
    const isMobile = (<any> window).isMobile;
    if ( isMobile.screen.isPhone ) {
      this.itemWidth = isMobile.screen.width;      // here is item width
    } else {
      this.itemWidth = config.itemWidth;
    }

    let items = this.items = this.data.items;
    this.itemsLength = items.length;
    this.itemsWidth = this.itemsLength * this.itemWidth ;  // here is items width 
    this.windowWidth = config.defaultLength * config.itemWidth;
    this.currentItem = items[0];

    this.default();
  }

  default() {
    const nativeElement = this.el.nativeElement;
    const config = {...SlicesComponent.config, ...this.data.config};
    
    const ulItemsClass = this.data.sliceClass;
    this.hoverClassName = this.data.config.hoverClassName;
    this.targetClassName = this.data.config.targetClassName;

    const  itemsWrapper =  nativeElement.querySelector('.items-wrapper');
    this.ulItems = nativeElement.querySelector('.ul-items');
    this.ulSwap = nativeElement.querySelector('.ul-swap');

    if (config.direction) {
      this.ulItems.style.left = '0px';
      this.ulSwap.style.left = this.itemsWidth + 'px';
    } else {
      this.ulItems.style.left = '0px';
      this.ulSwap.style.left = this.itemsWidth*-1 + 'px';
    }
    this.needArrow = this.itemsLength > config.defaultLength;

    this.ulItems.className = this.ulItems.className + ' ' + ulItemsClass;
    this.ulSwap.className = this.ulSwap.className + ' ' + ulItemsClass;
    itemsWrapper.className = itemsWrapper.className + ' ' + config.wrapperClassName;

    this.setInterval();
    // to avoid the event duplicated.
    this.bindForResponsive(this.ulItems);
    this.bindForResponsive(this.ulSwap);
    this.getSwipWidth();
  }

  setInterval (direction?) {
    this.interval = setInterval(_ => {
      (direction || SlicesComponent.config.direction) ? this.goRight(): this.goLeft();
    }, SlicesComponent.config.time);  // TODO: change back
  }

  turnLeft() {
    clearInterval(this.interval);
    this.goLeft();
    this.setInterval(false);
  }

  turnRight() {
    clearInterval(this.interval);
    this.goRight();
    this.setInterval(true);
  }

  // deal with smart phone only
  getSwipWidth() {
    const isMobile = (<any> window).isMobile;
    const config = {...SlicesComponent.config, ...this.data.config};

    if ( isMobile.screen.isPhone ) {
      this.swipWidth = isMobile.screen.width;
    } else {
      this.swipWidth = this.windowWidth;
    }
  }

  goLeft() {
    let mLeft, sLeft, mTempLeft, sTempLeft, tail;
    const ulItems = this.ulItems;
    const ulSwap = this.ulSwap;

    // to help understand: on pc the itemsWidth is 400*7 and the window width is 1200px
    const itemsWidth = this.itemsWidth;
    const windowWidth = this.windowWidth;

    mLeft = parseInt(ulItems.style.left);   //main ul left
    sLeft = parseInt(ulSwap.style.left);       //swap ul left

    if (mLeft>=windowWidth-itemsWidth && mLeft<windowWidth) {
      // console.log('向右滑动，左边swipeul 出来');

      ulItems.style.left = (mTempLeft = (mLeft + this.swipWidth) ) + 'px';
      ulSwap.style.left = (sTempLeft = (mTempLeft - itemsWidth) ) + 'px';
      tail = mTempLeft;

      //for not divisible items
      if( 0<=tail && tail<this.windowWidth ){
        ulSwap.style.left = itemsWidth*-1+tail;
      }

    } else if (sLeft>=windowWidth-itemsWidth && sLeft<windowWidth) {
      console.log('left side out of screen, in right');

      ulSwap.style.left = (sTempLeft = (sLeft + this.swipWidth) ) + 'px';
      ulItems.style.left = (mTempLeft = (sTempLeft - itemsWidth) ) + 'px';//TODO: animation of fade to left sLeftowly
      tail = sTempLeft;

      if( 0<=tail && tail<this.windowWidth ){
        ulItems.style.left = tail+itemsWidth*-1;
      }

    }
  }

  goRight() {
    let mLeft, sLeft, mTempLeft, sTempLeft, tail;
    const ulItems = this.ulItems;
    const ulSwap = this.ulSwap;
    const itemsWidth = this.itemsWidth;

    mLeft = parseInt(ulItems.style.left);   //main ul left
    sLeft = parseInt(ulSwap.style.left);       //swap ul left

    if (mLeft>itemsWidth*-1 && mLeft<=0) {

      ulItems.style.left = (mTempLeft = (mLeft - this.swipWidth) ) + 'px';//TODO: animation of fade to left sLeftowly
      ulSwap.style.left = (sTempLeft = (mTempLeft + itemsWidth) ) + 'px';
      tail = mTempLeft+itemsWidth;

      //for not divisible items
      if( 0<=tail && tail<this.windowWidth ){
        ulSwap.style.left = tail;
      }

    } else if(sLeft>itemsWidth*-1 && sLeft<=0) {

      ulSwap.style.left = (sTempLeft = (sLeft - this.swipWidth) ) + 'px';
      ulItems.style.left = (mTempLeft = (sTempLeft + itemsWidth) ) + 'px';//TODO: animation of fade to left sLeftowly
      tail = sTempLeft+itemsWidth;

      if( 0<=tail && tail<this.windowWidth ){
        ulItems.style.left = tail;
      }

    }
  }

  // targetClassName: string;
  // hoverClassName: string;

  itemOnMouseenter(target, product) {
    const nativeElement = this.el.nativeElement;
    let previousTarget = nativeElement.querySelector('.'+this.hoverClassName);
    previousTarget && (previousTarget.className = this.targetClassName);

  	target.className = this.hoverClassName + ' ' + this.targetClassName;
    product && this.onItemSelected.emit(product);
    clearInterval(this.interval);
  }

  itemOnMouseleave(target, product) {
  	// target.className = this.targetClassName;
    this.setInterval(true);
  }

  // itemSelected(item) {
  //   this.currentItem = item;
  //   this.onItemSelected.emit(item);
  // }

  bindForResponsive(box) {
    const manager = new Manager(box);
    const swipe = new Hammer.Swipe({ threshold: 6 });
    manager.add(swipe);

    box.addEventListener('touchstart', (eve) => {
      this.interval && clearInterval(this.interval);
    });
    manager.on('swipeleft', (eve) => {
      this.turnRight();
    });
    manager.on('swiperight', (eve) => {
      this.turnLeft();
    });
  }

}
