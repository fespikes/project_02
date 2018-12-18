
import {switchMap} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/services/common.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';

const srcs = {
  workflow: 'https://v.qq.com/iframe/player.html?vid=w0606h6wq07&tiny=0&auto=0',
  transporter: 'https://v.qq.com/iframe/player.html?vid=a0606eyaq2w&tiny=0&auto=0',
  governor: 'https://v.qq.com/iframe/player.html?vid=u0606ayy2k9&tiny=0&auto=0',
  rubik: 'https://v.qq.com/iframe/player.html?vid=q0751ajh83s&tiny=0&auto=0',
  pilot: 'https://v.qq.com/iframe/player.html?vid=k0606994neo&tiny=0&auto=0',
  admin: 'https://v.qq.com/iframe/player.html?vid=i0606tkkcgk&tiny=0&auto=0',
  products: 'https://v.qq.com/iframe/player.html?vid=x0606gqz2ds&tiny=0&auto=0'
};


@Component({
  selector: 'tdc-video-tutorial',
  templateUrl: './video-tutorial.component.html',
  styleUrls: ['./video-tutorial.component.sass']
})
export class VideoTutorialComponent implements OnInit {

  data: any;

  iframeSrc: any;

  // private current: any;
  title: string;
  summary: string;

  constructor(
    private commonService: CommonService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {

  }

  ngOnInit() {
    // TODO: match the videos with url
    const videoTutorial = this.commonService.getVideoTutorial();
    let src;
    this.data = this.adjustVideoData(videoTutorial);
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        src = srcs[params.get('id')];
        this.title = params.get('t');
        this.summary = params.get('s');
        return Promise.resolve(this.sanitizer.bypassSecurityTrustResourceUrl(src));
      }))
      .subscribe(iframeSrc => this.iframeSrc = iframeSrc);
  }

  onSelectVideo() {
  }

  adjustVideoData(data: any) {

    const config = {
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
