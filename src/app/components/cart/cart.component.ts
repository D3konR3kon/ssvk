import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../product';
import { CartService } from '../../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product !: Product
  items: any
  totalAmount=0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getItems()
    this.total();
  }
  getItems(){
    this.items = this.cartService.getItems();
  }
  //delete item
  deletei(i: number): void {
    this.items.splice(i, 1);
  
  }

  //adding total
    total(){
      this.items.map( (elem: any) => {
        if(elem.quantity) {
          this.totalAmount += elem.price*elem.quantity
        }
      })
    }

    increment(quantity: any, index: number){
      quantity++
      this.items[index].quantity = quantity
      this.total()
    }
    decrement(quantity: any, index: number){
      quantity--
      this.items[index].quantity = quantity
      this.total()
    }
  }
 



