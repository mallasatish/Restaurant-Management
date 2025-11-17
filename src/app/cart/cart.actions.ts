import { createAction } from '@ngrx/store';

export const increment = createAction('[Cart] Increment');
export const decrement = createAction('[Cart] Decrement');
export const clear = createAction('[Cart] Clear');

