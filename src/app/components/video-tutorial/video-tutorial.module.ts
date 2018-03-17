import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoTutorialRoutingModule } from './video-tutorial-routing.module';
import { VideoTutorialComponent } from './video-tutorial.component';
// import { VideoComponent } from './video/video.component';
import { SlicesComponent } from './slices/slices.component';
import { TuiModule, TccModalService } from '../../tui';


@NgModule({
  imports: [
    CommonModule,
    VideoTutorialRoutingModule,
    TuiModule
  ],
  declarations: [
  	VideoTutorialComponent,
  	// VideoComponent,
  	SlicesComponent
  ],
  providers: [
  	TccModalService,
  ]
})
export class VideoTutorialModule { }
