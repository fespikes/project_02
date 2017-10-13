import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tcc-ga-carousel',
  templateUrl: './ga-carousel.component.html',
  styleUrls: ['./ga-carousel.component.sass'],
})
export class GaCarouselComponent implements OnInit {
  array = [1, 2, 3, 4];

  constructor() { }

  ngOnInit() {
  }

}
