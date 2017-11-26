import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tdc-video-tutorial',
  templateUrl: './video-tutorial.component.html',
  styleUrls: ['./video-tutorial.component.sass']
})
export class VideoTutorialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	console.log('video-tutorial');
  }

}
