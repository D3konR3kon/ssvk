import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users: User[] = []
  email: any
  password: any
  confirmPwd: any

  constructor(private router: Router, private location : Location) { }

  ngOnInit(): void {
  }
  register() {
    let data 
    let user = {
      email: this.email,
      password: this.password
    }
    if(this.confirmPwd === this.password){
      data = this.users.push(user)
      localStorage.setItem('users', JSON.stringify(this.users))
        this.router.navigate(['/login'])
        return alert('Welcome to our site!')
    }
    
  }
}
