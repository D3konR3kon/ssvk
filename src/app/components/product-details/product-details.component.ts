import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CartService } from '../../cart.service';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
   product: Product | undefined;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private location: Location) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  addToCart(product: Product) {

    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
