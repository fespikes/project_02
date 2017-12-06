import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoTutorialRoutingModule } from './video-tutorial-routing.module';
import { VideoTutorialComponent } from './video-tutorial.component';
import { VideoComponent } from './video/video.component';
// import { SliceComponent } from './slice/slice.component';


@NgModule({
  imports: [
    CommonModule,
    VideoTutorialRoutingModule
  ],
  declarations: [
  	VideoTutorialComponent,
  	VideoComponent,
  	// SliceComponent
  ]
})
export class VideoTutorialModule { }
