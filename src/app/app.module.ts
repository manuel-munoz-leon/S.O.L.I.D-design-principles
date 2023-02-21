import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoWidgetComponent } from './widgets/video-widget/video-widget.component';
import { AnalyticsWidgetComponent } from './widgets/analytics-widget/analytics-widget.component';
import { CommonModule } from '@angular/common';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoWidgetComponent,
    AnalyticsWidgetComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatProgressBarModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
