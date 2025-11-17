import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';


@Injectable({ providedIn: 'root' })
export class CartFacade {
  cart$ = this.store.select(state => state.cart.items);

  constructor(private store: Store<{ cart: any }>) {}

  }

 
  

