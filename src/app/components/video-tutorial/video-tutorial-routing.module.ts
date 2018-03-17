import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VideoTutorialComponent } from './video-tutorial.component';
// import { VideoComponent } from './video/video.component';

const videoTutorialRoutes: Routes = [
  {
    path: 'video-tutorial/:id/:t/:s',
    component: VideoTutorialComponent,
    // children: [
    //   {
    //     path: ':id',
    //     component: VideoComponent
    //   }
    // ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(videoTutorialRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class VideoTutorialRoutingModule { }
