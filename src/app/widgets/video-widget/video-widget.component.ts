import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { WidgetComponent } from '../widget.component';

@Component({
  selector: 'video-widget',
  templateUrl: './video-widget.component.html',
  styleUrls: ['../widget.scss'],
})
export class VideoWidgetComponent extends WidgetComponent {
  @ViewChild('videoPlayer', { static: false }) videoplayer!: ElementRef;
  isPlay: boolean = false;
  constructor() {
    super();
  }

  toggleVideo() {
    this.videoplayer.nativeElement.play();
  }
}
