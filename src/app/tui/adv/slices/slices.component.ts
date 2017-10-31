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

	static styleConfig = {
		itemWidth: 400,
		gap: 0
	};

	interval: any;
	items: any;
	style: any;
	itemsLength: number;
	itemsWidth: number;
  windowWidth: number;

	swapListHtml: string;

	mainListDefault: number = 0;
	swapListDefault: number;

  constructor(
    private el:ElementRef
  	) {  	// console.log( 'in constructor:', template, viewContainer );
  }

  ngOnInit() {
  	const styleConfig = SlicesComponent.styleConfig;
    const items = this.items;

  	this.itemsLength = items.length;
  	this.itemsWidth = this.itemsLength * styleConfig.itemWidth ;
    this.windowWidth = 3 * styleConfig.itemWidth;

  	this.interval = setInterval(_=>{
  		// this.goRight();
  	}, 5000);

  }

  goLeft() { }

  goRight() {
    let ml, sl, swapMl, swapSl;
    const nativeElement = this.el.nativeElement;
    const ulProducts = nativeElement.querySelector('.ul-products');
    const ulSwap = nativeElement.querySelector('.ul-swap');


    if (this.itemsLength>3) {
      ml = parseInt(ulProducts.style.left);   //main ul left
      sl = parseInt(ulSwap.style.left);       //swap ul left
      //TODO: get the left dynamicly

      if (ml<=0 && ml>this.itemsWidth*-1) {

        ulSwap.style.left = (swapSl = this.windowWidth) + 'px';
        ulProducts.style.left = (swapMl = ml - this.windowWidth) + 'px';//TODO: animation of fade to left slowly

        if (ml==(this.itemsWidth-this.windowWidth)*-1) {
          ulSwap.style.left = 0 + 'px';
        }

        //for not divisible items
        if( 0<swapMl+this.itemsWidth && swapMl+this.itemsWidth<this.windowWidth ){
          ulSwap.style.left = this.itemsWidth + swapMl;
        }
      } else {
        ulProducts.style.left = (swapMl = this.windowWidth) + 'px';
        ulSwap.style.left = (swapSl = sl - this.windowWidth) + 'px';

        if (sl = this.itemsWidth*-1) {
          ulProducts.style.left = '0px';
        }

        if( 0<swapSl+this.itemsWidth && swapSl+this.itemsWidth<this.windowWidth ){
          ulProducts.style.left = this.itemsWidth + swapSl;
        }

      }
    }
  }

  itemOnMouseenter(target, product) {
  	target.className='current'
  }

  itemOnMouseleave(target, product) {
  	target.removeAttribute('class')
  }

}
