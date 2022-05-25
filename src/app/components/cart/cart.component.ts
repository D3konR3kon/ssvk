import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product !: Product
  items = this.cartService.getItems();
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    
  }
  deletei(i: number): void {
    this.items.splice(i, 1);

}
}
