import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { WidgetComponent } from '../widget.component';

@Component({
  selector: 'video-widget',
  templateUrl: './video-widget.component.html',
  styleUrls: ['../widget.scss'],
})
export class VideoWidgetComponent extends WidgetComponent {
  @Input() text: string = '';
  @Input() btnText: string = '';
  @ViewChild('videoPlayer', { static: false }) videoplayer!: ElementRef;
  isPlay: boolean = false;
  videoAction = 'Play >';
  constructor() {
    super();
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
  }
}
