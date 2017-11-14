import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'tui-slices',
  templateUrl: './slices.component.html',
  styleUrls: ['./slices.component.sass'],
  host: {
  	class: 'tui-slices'
  },
  inputs: ['items', 'style']
})
export class SlicesComponent implements OnInit {

	static config = {
		itemWidth: 400,
		gap: 0,

    defaultLength: 3,
    direction: true, //go right
	};

	interval: any;
	items: any;
	style: any;
	itemsLength: number;    //how many items of the products list
	itemsWidth: number;    //
  windowWidth: number;

	ulProducts: any;
  ulSwap: any;
  needArrow: boolean;

  constructor(
    private el:ElementRef
  	) {  	// console.log( 'in constructor:', template, viewContainer );
  }

  ngOnInit() {
  	const config = SlicesComponent.config;
    const items = this.items;

  	this.itemsLength = items.length;
  	this.itemsWidth = this.itemsLength * config.itemWidth ;
    this.windowWidth = config.defaultLength * config.itemWidth;

    const nativeElement = this.el.nativeElement;
    this.ulProducts = nativeElement.querySelector('.ul-products');
    this.ulSwap = nativeElement.querySelector('.ul-swap');

    if (config.direction) { 
      this.ulProducts.style.left = '0px';
      this.ulSwap.style.left = this.itemsWidth + 'px';
    } else {
      this.ulProducts.style.left = '0px';
      this.ulSwap.style.left = this.itemsWidth*-1 + 'px';
    }
    this.needArrow = this.itemsLength>SlicesComponent.config.defaultLength;

    this.setInterval();
  }

  setInterval (direction?) {
    this.interval = setInterval(_=>{
      (direction || SlicesComponent.config.direction) ? this.goRight(): this.goLeft();
    }, 3000);
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

  goLeft() {
    let mLeft, sLeft, mTempLeft, sTempLeft, tail;
    const ulProducts = this.ulProducts;
    const ulSwap = this.ulSwap;
    const itemsWidth = this.itemsWidth;
    const windowWidth = this.windowWidth;

    mLeft = parseInt(ulProducts.style.left);   //main ul left
    sLeft = parseInt(ulSwap.style.left);       //swap ul left

    if (mLeft>=windowWidth-itemsWidth && mLeft<windowWidth) {

      ulProducts.style.left = (mTempLeft = (mLeft + this.windowWidth) ) + 'px';//TODO: animation of fade to left sLeftowly
      ulSwap.style.left = (sTempLeft = (mTempLeft - itemsWidth) ) + 'px';
      tail = mTempLeft;

      //for not divisible items
      if( 0<=tail && tail<this.windowWidth ){
        ulSwap.style.left = itemsWidth*-1+tail;
      }

    } else if (sLeft>=windowWidth-itemsWidth && sLeft<windowWidth) {

      ulSwap.style.left = (sTempLeft = (sLeft + this.windowWidth) ) + 'px';
      ulProducts.style.left = (mTempLeft = (sTempLeft - itemsWidth) ) + 'px';//TODO: animation of fade to left sLeftowly
      tail = sTempLeft;

      if( 0<=tail && tail<this.windowWidth ){
        ulProducts.style.left = tail+itemsWidth*-1;
      }

    }
  }

  goRight() {
    let mLeft, sLeft, mTempLeft, sTempLeft, tail;
    const ulProducts = this.ulProducts;
    const ulSwap = this.ulSwap;
    const itemsWidth = this.itemsWidth;

    mLeft = parseInt(ulProducts.style.left);   //main ul left
    sLeft = parseInt(ulSwap.style.left);       //swap ul left

    if (mLeft>itemsWidth*-1 && mLeft<=0) {

      ulProducts.style.left = (mTempLeft = (mLeft - this.windowWidth) ) + 'px';//TODO: animation of fade to left sLeftowly
      ulSwap.style.left = (sTempLeft = (mTempLeft + itemsWidth) ) + 'px';
      tail = mTempLeft+itemsWidth;

      //for not divisible items
      if( 0<=tail && tail<this.windowWidth ){
        ulSwap.style.left = tail;
      }

    } else if(sLeft>itemsWidth*-1 && sLeft<=0) {

      ulSwap.style.left = (sTempLeft = (sLeft - this.windowWidth) ) + 'px';
      ulProducts.style.left = (mTempLeft = (sTempLeft + itemsWidth) ) + 'px';//TODO: animation of fade to left sLeftowly
      tail = sTempLeft+itemsWidth;

      if( 0<=tail && tail<this.windowWidth ){
        ulProducts.style.left = tail;
      }

    }
  }

  itemOnMouseenter(target, product) {
  	target.className='current';
    clearInterval(this.interval);
  }

  itemOnMouseleave(target, product) {
  	target.removeAttribute('class');
    this.setInterval(true);
  }

}
