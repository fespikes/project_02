import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/services/common.service';

@Component({
  selector: 'tdc-video-tutorial',
  templateUrl: './video-tutorial.component.html',
  styleUrls: ['./video-tutorial.component.sass']
})
export class VideoTutorialComponent implements OnInit {

  private data: any;

  private current: any;
  
  constructor(
	  private commonService: CommonService
  ) {

  }

  ngOnInit() {
    //TODO: match the videos with url 
	  let videoTutorial = this.commonService.getVideoTutorial();
	  this.data = this.adjustVideoData(videoTutorial);

  }

  onSelectVideo() {
    
  }

  adjustVideoData(data:any) {

  	let config = {
			itemWidth: 300,
			hoverClassName: 'current',
			wrapperClassName: 'h300',
			defaultLength: 4
  	};

  	data.config = {
  		...data.config,
  		...config
  	};

    data.sliceClass = 'video-list';
  	return data;
  }

}
