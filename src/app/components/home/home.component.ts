import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../../mock-products';
import { Product } from '../../product';
import { ProductService } from '../../product.service';
import {CartService} from '../../cart.service'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  
 
  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    
    this.getProduct();
  }
  addToCart(product: Product) {

    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  getProduct(): void {
    this.productService.getProducts()
        .subscribe(products => this.products = products);
  }
  

}
