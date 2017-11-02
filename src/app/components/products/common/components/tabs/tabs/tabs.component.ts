import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent implements OnInit, OnDestroy {

  public tabs: any;

  private tabUlClassName = 'tabsUl';

  constructor(
  	private el:ElementRef
	) { }

  ngOnInit() {
  	document.onscroll = this.manipulateTabPosition.bind(this);
  }

  manipulateTabPosition(e) {
  	const scrollTop = 402;  	//XXXX: get the scrollTop flexibly;
  	const tabsUl = this.el.nativeElement.querySelector('.tabsUl');

  	if (document.documentElement.scrollTop<scrollTop) {
  		tabsUl.className = this.tabUlClassName;
  		return ;

  	} else {
  		tabsUl.className = 'fixed ' + this.tabUlClassName;
  	}
  }

  ngOnDestroy() {
  	document.onscroll = null;
  }

}
