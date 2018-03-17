import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
import { Observable }            from 'rxjs/Observable';

let srcs = {
  inceptor01: 'https://v.qq.com/iframe/player.html?vid=e0507nmt9qg&tiny=0&auto=0',
  inceptor02: 'https://v.qq.com/iframe/player.html?vid=y0507qw8cg9&tiny=0&auto=0',

  workflow: 'https://v.qq.com/iframe/player.html?vid=w0606h6wq07&tiny=0&auto=0',
  transporter: 'https://v.qq.com/iframe/player.html?vid=a0606eyaq2w&tiny=0&auto=0',
  governor: 'https://v.qq.com/iframe/player.html?vid=u0606ayy2k9&tiny=0&auto=0',
  rubik: 'https://v.qq.com/iframe/player.html?vid=p0606mfmg2t&tiny=0&auto=0',
  pilot: 'https://v.qq.com/iframe/player.html?vid=k0606994neo&tiny=0&auto=0',
  admin: 'https://v.qq.com/iframe/player.html?vid=i0606tkkcgk&tiny=0&auto=0',
  products: 'https://v.qq.com/iframe/player.html?vid=x0606gqz2ds&tiny=0&auto=0'
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
