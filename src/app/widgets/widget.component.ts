import { Directive, Input } from '@angular/core';

@Directive()
export class WidgetComponent {
  @Input() text: string = '';
  @Input() btnText: string = '';
  isLoading = false;

  constructor() {}

  reload(activate: boolean = true): void {
    this.isLoading = activate;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
