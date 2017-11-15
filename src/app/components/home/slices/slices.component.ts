import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'tui-slices-modules',
  templateUrl: './slices.component.html',
  styleUrls: ['./slices.component.sass'],
  inputs: ['data'/*, 'style'*/],
  //TODO:
  host: {
  	class: 'tui-slices-modules'
  },
})
export class SlicesComponent implements OnInit {

	static config = {
		itemWidth: 400,
		defaultLength: 3,
    gap: 0,
		direction: true, //go right
	};

	data: any;//TODO:

	interval: any;
	items: any;
	// style: any;
	itemsLength: number;    //how many items of the products list
	itemsWidth: number;    //
  windowWidth: number;

	ulItems: any;
  ulSwap: any;
  needArrow: boolean;

  //for hover status related
  targetClassName: string;
  hoverClassName: string;

  constructor(
  	private el:ElementRef
  ) { }

  ngOnInit() {
  	//TODO:
  	this.items = this.data.items;
  	const ulItemsClass = this.data.sliceClass;
  	const config = {...this.data.config,...SlicesComponent.config};
  	this.hoverClassName = this.data.config.hoverClassName;
  	
  	// const config = SlicesComponent.config;
    const items = this.items;

  	this.itemsLength = items.length;
  	this.itemsWidth = this.itemsLength * config.itemWidth ;
    this.windowWidth = config.defaultLength * config.itemWidth;

    const nativeElement = this.el.nativeElement;
    this.ulItems = nativeElement.querySelector('.ul-items');
    this.ulSwap = nativeElement.querySelector('.ul-swap');

    if (config.direction) { 
      this.ulItems.style.left = '0px';
      this.ulSwap.style.left = this.itemsWidth + 'px';
    } else {
      this.ulItems.style.left = '0px';
      this.ulSwap.style.left = this.itemsWidth*-1 + 'px';
    }
    this.needArrow = this.itemsLength>SlicesComponent.config.defaultLength;

    this.ulItems.className = this.ulItems.className + ' ' + ulItemsClass;
    this.ulSwap.className = this.ulSwap.className + ' ' + ulItemsClass;

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
    const ulItems = this.ulItems;
    const ulSwap = this.ulSwap;
    const itemsWidth = this.itemsWidth;
    const windowWidth = this.windowWidth;

    mLeft = parseInt(ulItems.style.left);   //main ul left
    sLeft = parseInt(ulSwap.style.left);       //swap ul left

    if (mLeft>=windowWidth-itemsWidth && mLeft<windowWidth) {

      ulItems.style.left = (mTempLeft = (mLeft + this.windowWidth) ) + 'px';//TODO: animation of fade to left sLeftowly
      ulSwap.style.left = (sTempLeft = (mTempLeft - itemsWidth) ) + 'px';
      tail = mTempLeft;

      //for not divisible items
      if( 0<=tail && tail<this.windowWidth ){
        ulSwap.style.left = itemsWidth*-1+tail;
      }

    } else if (sLeft>=windowWidth-itemsWidth && sLeft<windowWidth) {

      ulSwap.style.left = (sTempLeft = (sLeft + this.windowWidth) ) + 'px';
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

      ulItems.style.left = (mTempLeft = (mLeft - this.windowWidth) ) + 'px';//TODO: animation of fade to left sLeftowly
      ulSwap.style.left = (sTempLeft = (mTempLeft + itemsWidth) ) + 'px';
      tail = mTempLeft+itemsWidth;

      //for not divisible items
      if( 0<=tail && tail<this.windowWidth ){
        ulSwap.style.left = tail;
      }

    } else if(sLeft>itemsWidth*-1 && sLeft<=0) {

      ulSwap.style.left = (sTempLeft = (sLeft - this.windowWidth) ) + 'px';
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
  	this.targetClassName = target.className;
  	target.className = this.hoverClassName + ' ' + this.targetClassName;
    clearInterval(this.interval);
  }

  itemOnMouseleave(target, product) {
  	target.className = this.targetClassName;
    this.setInterval(true);
  }

}
