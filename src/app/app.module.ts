import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './cart/cart.reducer';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: cartReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
