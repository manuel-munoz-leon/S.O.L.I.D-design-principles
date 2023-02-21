import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'video-widget',
  templateUrl: './video-widget.component.html',
  styleUrls: ['../widget.scss'],
})
export class VideoWidgetComponent {
  @Input() text: string = '';
  @Input() btnText: string = '';
  isLoading = false;

  @ViewChild('videoPlayer', { static: false }) videoplayer!: ElementRef;
  isPlay: boolean = false;
  constructor() {}

  toggleVideo() {
    this.videoplayer.nativeElement.play();
  }

  reload(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
