import { Component, Input } from '@angular/core';
@Component({
  selector: 'analytics-widget',
  templateUrl: './analytics-widget.component.html',
  styleUrls: ['../widget.scss'],
})
export class AnalyticsWidgetComponent {
  @Input() text: string = '';
  @Input() btnText: string = '';
  isLoading = false;

  constructor() {}

  reload(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
