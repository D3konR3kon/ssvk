import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../../mock-products';
import { Product } from '../../product';
import { ProductService } from '../../product.service';
import {CartService} from '../../cart.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  
 
  constructor(private productService: ProductService, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    
    this.getProduct();
  }
  addToCart(product: Product) {

    this.cartService.addToCart(product);
    
  }

  getProduct(): void {
    if(!localStorage.getItem('token')) {
      this.router.navigate(['/login'])
      return alert("Please log in")}
    else {
      this.productService.getProducts()
        .subscribe(products => this.products = products);
    }
    
  }
  

}
