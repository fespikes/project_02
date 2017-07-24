import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgSrcDirective } from './img/img-src.directive';
import { BgImgUrlDirective } from './img/bg-img-url.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ImgSrcDirective,
    BgImgUrlDirective,
  ],
  exports: [
    ImgSrcDirective,
    BgImgUrlDirective,
  ],
})
export class SharedModule { }
