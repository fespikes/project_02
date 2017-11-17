import {
  AnimationEntryMetadata,
  Component,
  Input
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,

  query,
  group
} from '@angular/animations';


// Component transition animations
export const slidesAnimation: AnimationEntryMetadata = trigger('slicesAnimation', [
    state('*',
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('0.2s ease-in')
    ]),
    transition(':leave', [
      animate('0.5s ease-out', style({
        opacity: 0,
        transform: 'translateY(100%)'
      }))
    ])
  ]);



// Component transition animations
export const routeAnimation: AnimationEntryMetadata =
  trigger('routeAnimation', [
  transition(':enter', [
    style({
      position: 'absolute'
    }),
    animate('0.5s ease-in-out')
  ]),
  transition('* => *', [
    query(':leave', 
      style({ transform: 'translateY(0)', position: 'absolute'}),
      { optional: true }
    ),
    query(':enter', 
      style({ transform: 'translateY(100%)', position: 'absolute'}),
      { optional: true }
    ),
    group([
      query(':leave',
        animate('.5s ease-in-out', 
          style({transform: 'translateY(-100%)'})
        ),
        { optional: true }
      ),
      query(':enter',
        animate('.5s ease-in-out',
          style({transform: 'translateY(0)'})
        ),
        { optional: true }
      )
    ])
  ])
]);