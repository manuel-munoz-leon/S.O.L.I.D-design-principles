import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { WidgetComponent } from '../widget.component';
import { Toggler, Widget } from '../widget.model';
import { WIDGET } from '../widget.token';

@Component({
  selector: 'video-widget',
  templateUrl: './video-widget.component.html',
  styleUrls: ['../widget.scss'],
  providers: [{ provide: WIDGET, useExisting: VideoWidgetComponent }],
})
export class VideoWidgetComponent
  extends WidgetComponent
  implements Widget, Toggler
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
    console.log('Video tagging...');
  }

  toggleVideo(): void {
    if (!this.isPlay) {
      this.videoplayer.nativeElement.play();
      this.videoAction = 'Pause ||';
    } else {
      this.videoplayer.nativeElement.pause();
      this.videoAction = 'Play >';
    }
    this.isPlay = !this.isPlay;
    this.logData();
  }
}
