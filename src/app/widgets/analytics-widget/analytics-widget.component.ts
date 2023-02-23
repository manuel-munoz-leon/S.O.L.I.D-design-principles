import { Component } from '@angular/core';
import { WidgetComponent } from '../widget.component';
@Component({
  selector: 'analytics-widget',
  templateUrl: './analytics-widget.component.html',
  styleUrls: ['../widget.scss'],
})
export class AnalyticsWidgetComponent extends WidgetComponent {
  constructor() {
    super();
  }

  override reload(): void {
    super.reload(false);
    console.warn('Feature not supported!');
  }
}
