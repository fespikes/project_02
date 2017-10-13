import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'tdc-ui-slices',
  templateUrl: './slices.component.html',
  styleUrls: ['./slices.component.sass'],
  host: {
  	class: 'tui-plugin-slices'
  },
  inputs: ['items', 'style']
})
export class SlicesComponent implements OnInit {

	static styleConfig = {
		itemWidth: 364,
		gap: 36
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

  	this.itemsLength = this.items.length;
  	this.itemsWidth = this.itemsLength * (styleConfig.itemWidth + styleConfig.gap);
    this.windowWidth = 3 * (styleConfig.itemWidth + styleConfig.gap)

  	this.interval = setInterval(_=>{
  		this.goRight();
  	}, 5000);

  }

  goLeft() {

  }

  goRight() {
    let ml, sl;
    const nativeElement = this.el.nativeElement;
    const ulProducts = nativeElement.querySelector('.ul-products');
    const ulSwap = nativeElement.querySelector('.ul-swap');

    if (this.itemsLength>3) {
      ml = parseInt(ulProducts.style.left);   //main ul left
      sl = parseInt(ulSwap.style.left);       //swap ul left
      //TODO: get the left dynamicly

      if (ml<=0 && ml>this.itemsWidth*-1) {

        ulSwap.style.left = this.itemsWidth + 'px';
        ulProducts.style.left = ml - 1120 + 'px';//TODO: animation of fade to left slowly

        if (ml==(this.itemsWidth-this.windowWidth)*-1) {
          ulSwap.style.left = 0 + 'px';
        }
      } else {
        ulProducts.style.left = '1120px';
        ulSwap.style.left = sl - 1120 + 'px';
        if (sl=(this.itemsWidth-1120)*-1) {
          ulProducts.style.left = '0px';
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
