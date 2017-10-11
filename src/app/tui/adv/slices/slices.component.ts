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

	swapListHtml: string;

	mainListDefault: number;
	swapListDefault: number;

  constructor(
    private el:ElementRef
  	) {  	// console.log( 'in constructor:', template, viewContainer );
  }

  ngOnInit() {
  	const styleConfig = SlicesComponent.styleConfig;

  	this.itemsLength = this.items.length;
  	this.itemsWidth = this.itemsLength * (styleConfig.itemWidth + styleConfig.gap);

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
      this.mainListDefault = parseInt(ulProducts.style.left);
      this.swapListDefault = parseInt(ulSwap.style.left);
      //TODO: get the left dynamicly
      if (this.mainListDefault<=0 && this.mainListDefault>this.itemsWidth*-1) {
        console.log('fffffuck');
        ulSwap.style.left = this.itemsWidth + 'px';
        ulProducts.style.left = this.mainListDefault - 1000 + 'px';

        if (this.mainListDefault==(this.itemsWidth-)) {

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
