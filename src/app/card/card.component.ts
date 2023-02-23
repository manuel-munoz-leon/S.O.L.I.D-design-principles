import { animate, style, transition, trigger } from '@angular/animations';
import {
  AfterContentInit,
  Component,
  ContentChild,
  Input,
} from '@angular/core';
import { AnalyticsWidgetComponent } from '../widgets/analytics-widget/analytics-widget.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('slideDownUp', [
      transition(':enter', [style({ height: 0 }), animate(500)]),
      transition(':leave', [animate(500, style({ height: 0 }))]),
    ]),
  ],
})
export class CardComponent implements AfterContentInit {
  @ContentChild(AnalyticsWidgetComponent) widget!: AnalyticsWidgetComponent;
  @Input() isOpen: boolean = true;
  @Input() img: string = '';
  @Input() title: string = '';

  constructor() {}

  ngAfterContentInit(): void {
    console.log('widget => ', this.widget);
  }

  showHideDescription(): void {
    this.isOpen = !this.isOpen;
  }

  refresh() {
    this.widget.reload();
  }
}
