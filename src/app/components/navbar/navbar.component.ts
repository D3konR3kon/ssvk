import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
public totalItems :any

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.totalItems = this.cartService.getItems()
    this.totalItems.length
    }

    
    
      
    
  

}


