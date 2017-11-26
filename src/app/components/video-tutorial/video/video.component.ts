import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
import { Observable }            from 'rxjs/Observable';

let srcs = {
  inceptor01: 'https://v.qq.com/iframe/player.html?vid=e0507nmt9qg&tiny=0&auto=0',
  inceptor02: 'https://v.qq.com/iframe/player.html?vid=y0507qw8cg9&tiny=0&auto=0',
};

@Component({
  selector: 'tutorial-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.sass']
})
export class VideoComponent implements OnInit {

  // iframeSrc: Observable<any>;
  iframeSrc: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    let src;

    this.route.paramMap
      .switchMap((params: ParamMap) => {
        src = srcs[params.get('id')];
        return Promise.resolve(this.sanitizer.bypassSecurityTrustResourceUrl(src))
      })
      .subscribe(iframeSrc => this.iframeSrc=iframeSrc);
  }

}
