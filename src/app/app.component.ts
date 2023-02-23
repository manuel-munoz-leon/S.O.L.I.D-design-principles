import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  darkTheme = false;
  theme = 'Primary';

  constructor() {}

  themeSwitcher(): void {
    this.darkTheme = !this.darkTheme;
    this.theme = this.darkTheme ? 'Dark' : 'Primary';
  }
}
