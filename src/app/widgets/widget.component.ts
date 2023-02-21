import { Directive } from '@angular/core';

@Directive()
export class WidgetComponent {
  isLoading = false;

  constructor() {}

  reload(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
