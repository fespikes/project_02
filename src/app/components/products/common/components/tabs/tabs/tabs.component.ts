import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent implements OnInit, OnDestroy {

  static tabHeight = 56;
  static bannerPlusNav = 402;

  public tabs: any;

  private tabUlClassName = 'tabsUl';

  constructor(
  	private el:ElementRef
	) { }

  ngOnInit() {
  	document.onscroll = this.manipulateTabPosition.bind(this);
  }

  manipulateTabPosition(e) {
  	const tabsUl = this.el.nativeElement.querySelector('.tabsUl');

  	if (document.documentElement.scrollTop<TabsComponent.bannerPlusNav) {
  		tabsUl.className = this.tabUlClassName;
  		return ;

  	} else {
  		tabsUl.className = 'fixed ' + this.tabUlClassName;
      //TODO: change the current tab when scroll up
  	}
  }

  ngOnDestroy() {
  	document.onscroll = null;
  }

  scrollUp(id, $event) {
    console.log(id);

    let node = document.querySelector(id);
    scrollTo(0, node.offsetTop-TabsComponent.tabHeight);

    let _active = this.el.nativeElement.querySelector('.active');

    _active && _active.className && (_active.className='');
    $event.target.className = 'active'

  }

}
