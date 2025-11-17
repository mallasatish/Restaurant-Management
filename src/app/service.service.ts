import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  foodItems = [
    
    { name: 'Biryani', img: 'assets/biryani.jpeg'},
    { name: 'Shawarma', img: 'assets/burger.jpeg' },
    { name: 'Pizza', img: 'assets/cake.jpeg' },
    { name: 'Chinese', img: 'assets/icecream.jpeg' },

    { name: 'Burger', img: 'assets/pizza.jpeg' },
    { name: 'Cake', img: 'assets/shawarma.jpeg' },
    { name: 'Ice Cream', img: 'assets/tiffin.jpeg' },
    { name: 'North Indian', img: 'assets/tiffin.jpeg'},
   
  ];

  constructor() { }

  getData() {
    return this.foodItems;
}
}
