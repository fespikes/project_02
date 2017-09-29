import { Component, OnInit, Input } from '@angular/core';
import { Advantages } from '../../../interfaces/advantages';

@Component({
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.sass']
})
export class AdvantagesComponent implements Advantages {

  @Input()
  data: any;

}
