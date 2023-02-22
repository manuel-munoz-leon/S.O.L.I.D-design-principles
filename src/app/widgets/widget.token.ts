import { InjectionToken } from '@angular/core';
import { Reloadable } from './widget.model';

export const WIDGET = new InjectionToken<Reloadable>('Widget token');
