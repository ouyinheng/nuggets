import {
  trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimation', [
    transition('* => login', [
      // style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: '10000'
        })
      ]),
      query(':enter', [
        // style({ transform: 'translateY(0)'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ transform: 'translateY(-100vh)'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ transform: 'translateY(0)'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('login => *', [
      // style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: '10000'
        })
      ]),
      query(':enter', [
        // style({ transform: 'translateY(0)'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':enter', [
          animate('300ms ease-out', style({ transform: 'translateY(0vh)'}))
        ]),
        query(':leave', [
          animate('300ms ease-out', style({ transform: 'translateY(100vh)'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
