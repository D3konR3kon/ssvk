import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any
  password: any
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
//   signIn() {
//     let formData = JSON.parse(`${localStorage.getItem('users')}`);
//     let exist = formData.length && 
//     JSON.parse(`${localStorage.getItem('formData')}`).some((data: any) =>{data.email == this.email && data.password == this.password});
//     if(!exist){
//         alert("Incorrect login credentials");
//     }
//     else{
//       this.router.navigate(['/home'])
//     }
   
// }

signIn(){
  let users = JSON.parse(`${localStorage.getItem('users')}`)
    users.filter((elem: any) => {
      if((!this.email || !this.password) || (elem.email == !this.email || elem.password == !this.password)) return alert("Please ensure that you signing up first")
      else if(elem.email == this.email && elem.password == this.password){
        localStorage.setItem('token', JSON.stringify(elem))
        this.router.navigate(['home'])
        return alert('Welcome back home')
      }
    })
}
}

