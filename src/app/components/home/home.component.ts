import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../../mock-products';
import { Product } from '../../product';
import { ProductService } from '../../product.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
 
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProduct();
  }


  getProduct(): void {
    this.productService.getProducts()
        .subscribe(products => this.products = products);
  }

}
