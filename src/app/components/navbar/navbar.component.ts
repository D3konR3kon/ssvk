import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
public totalItems:number = 0

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log(this.toto())
    }
toto(){
  this.cartService.calcTotal()
  }
}


