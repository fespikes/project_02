import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tcc-ga-loading',
  templateUrl: './ga-loading.component.html',
  styleUrls: ['./ga-loading.component.sass'],
})
export class GaLoadingComponent implements OnInit {
  loading = false;

  constructor() { }

  ngOnInit() {
    this.enterLoading();
  }

  tabChange(index) {
    this.enterLoading();
  }

  enterLoading() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }
}
