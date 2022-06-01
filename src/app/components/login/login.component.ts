import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder,FormControl,FormControlName,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm = new FormGroup({
    password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    email: new FormControl('', [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
  ])
  }); 

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

login(){
  this.email = this.userForm.value.email;
  this.password = this.userForm.value.email;
  let users = JSON.parse(`${localStorage.getItem('users')}`)
  
    users.filter((elem: any) => {
      if((!this.password || !this.email) || (elem.email == !this.email || elem.password == !this.password)) 
      return alert("Please ensure that you signing up first")
      
      else if(elem.email == this.email && elem.password == this.password){
        localStorage.setItem('token', JSON.stringify(elem))
        this.router.navigate(['home'])
       
        return alert('Welcome')

      }
    })
}
}

