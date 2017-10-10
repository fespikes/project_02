import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './ga-icon.component.html',
  styleUrls: ['./ga-icon.component.sass'],
})
export class GaIconComponent implements OnInit {
  icons: string[] = [];
  statuses = ['RUNNING', 'PREPARING', 'STOPPED', 'DELETED'];

  constructor() { }

  ngOnInit() {
    this.getAllIcon();
  }

  getAllIcon() {
    const iconSymbol = document.querySelector('tcc-icon-symbol');
    const symbols = iconSymbol.querySelectorAll('symbol');
    for (let i = 0; i < symbols.length; i ++) {
      this.icons.push(symbols[i].id);
    }
  }

}
