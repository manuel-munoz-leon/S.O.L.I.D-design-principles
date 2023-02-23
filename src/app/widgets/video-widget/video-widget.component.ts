import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { WidgetComponent } from '../widget.component';
import { Playdable, Widget } from '../widget.model';

@Component({
  selector: 'video-widget',
  templateUrl: './video-widget.component.html',
  styleUrls: ['../widget.scss'],
})
export class VideoWidgetComponent
  extends WidgetComponent
  implements Widget, Playdable
{
  @Input() text: string = '';
  @Input() btnText: string = '';
  @ViewChild('videoPlayer', { static: false }) videoplayer!: ElementRef;
  isPlay: boolean = false;
  videoAction = 'Play >';
  constructor() {
    super();
  }
  logData(): void {
    console.warn('Video is playing.');
  }

  toggleVideo(): void {
    if (!this.isPlay) {
      this.videoplayer.nativeElement.play();
      this.videoAction = 'Pause ||';
      this.logData();
    } else {
      this.videoplayer.nativeElement.pause();
      this.videoAction = 'Play >';
    }
    this.isPlay = !this.isPlay;
  }
}
