import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
public totalItems :any

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.totalItems = this.cartService.getItems()
    this.totalItems.length
    }

    
    logout(){
      localStorage.removeItem('token')
      this.router.navigate(['/login'])
    }
      
    
  

}


