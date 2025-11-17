import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, clear } from '../cart/cart.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(private store: Store<{ count: number }>) {}

  add() {
    this.store.dispatch(increment());
  }

  remove() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(clear());
  }
}

