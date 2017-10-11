import { Component, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

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
  	// private template: TemplateRef<any>, 
  	// private viewContainer: ViewContainerRef
  	) {  	// console.log( 'in constructor:', template, viewContainer );
  }

  ngOnInit() {
  	const styleConfig = SlicesComponent.styleConfig;

  	this.itemsLength = this.items.length;
  	this.itemsWidth = this.itemsLength * (styleConfig.itemWidth + styleConfig.gap) - styleConfig.gap;

  	this.interval = setInterval(_=>{
  		this.goRight();
  	}, 5000);

  }

  goLeft() {

  }

  goRight() {

  }

  itemOnMouseenter(target, product) {
  	target.className='current'
  }

  itemOnMouseleave(target, product) {
  	target.removeAttribute('class')
  }

}
