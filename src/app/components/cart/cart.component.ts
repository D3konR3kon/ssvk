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
  totalAmount : number= 0
 
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getItems()
    this.getTotal();
  }
  getItems(){
    this.items = this.cartService.getItems();
  }
  //delete item
  deletei(i: number): void {
    this.items.splice(i, 1);
  
  }

  //adding total
    // total(){
    //   this.items.map( (elem: any) => {
    //     if(elem.quantity) 
    //       this.totalAmount += elem.price*elem.quantity
        
    //   })
    // }
    getTotal(){
      let total = 0;
      for (var i = 0; i < this.items.length; i++) {
          if (this.items[i].price) {
              total += this.items[i].price * this.items[i].quantity;
              this.totalAmount = total;
          }
      }
      return total;
    }
  
  }
 



