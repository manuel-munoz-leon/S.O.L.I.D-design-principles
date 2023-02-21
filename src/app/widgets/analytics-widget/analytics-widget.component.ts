import { Component, Input } from '@angular/core';
import { WidgetComponent } from '../widget.component';
import { Widget } from '../widget.model';
@Component({
  selector: 'analytics-widget',
  templateUrl: './analytics-widget.component.html',
  styleUrls: ['../widget.scss'],
})
export class AnalyticsWidgetComponent extends WidgetComponent implements Widget
{
  @Input() text: string = '';
  @Input() btnText: string = '';
  constructor() {
    super();
  }

  logData(): void {
    const taggingData = { tagId: 1234, clientName: 'Amazon' };
    console.table(taggingData);
  }

  override reload(): void {
    super.reload();
    this.logData();
  }
}
