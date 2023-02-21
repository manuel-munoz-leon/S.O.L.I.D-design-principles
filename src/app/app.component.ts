import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //black logo https://cdn.iconscout.com/icon/free/png-256/angular-2336967-1982848.png
  darkTheme: boolean = false;
  theme: string = 'Primary';

  constructor() {}

  themeSwitcher(): void {
    this.darkTheme = !this.darkTheme;
    this.theme = this.darkTheme ? 'Dark' : 'Primary';
  }
}
