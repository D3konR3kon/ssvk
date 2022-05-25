import { Injectable } from '@angular/core';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];
  /* . . . */
   constructor() {}
     
    addToCart(product: Product) {
      const productExistInCart = this.items.find(({name}) => name === product.name); // find product by name
   if (!productExistInCart) {
     this.items.push({...product}); // enhance "porduct" opject with "num" property
     return;
    }productExistInCart.quantity += 1;
  }
  
    getItems(): Product[] {
      return this.items;
    }
  
    clearCart() {
      this.items = [];
      return this.items;
    }
  /* . . . */
  deletei(product: Product): void {
    this.items = this.items.filter(p => p !== product);
    
  }

}