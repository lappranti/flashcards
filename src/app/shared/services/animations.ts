// animations.ts
import { trigger, transition, animate, style } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0.95 }),
    animate('600ms', style({ opacity: 1 }))
  ]),
  transition(':leave', [animate('600ms', style({ opacity: 0.95 }))])
]);
