import { Component, Output } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})

export class PaymentComponent {
  totalAmount = JSON.parse(`${localStorage.getItem('Total')}`) 
  paymentHandler: any = null;
  success: boolean = false
  
  failure:boolean = false
  //totAmount = this.cartService.Total()
  constructor(private cartService : CartService, private router: Router) {}
  ngOnInit(): void {
    ///this.cartService.Total();
    this.invokeStripe();
   
  }
  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51L7rKcDhBC8jyjnypr0JtrVsFuFe5Yti3kPElTx2rPqKEDmbR0edEj2g6smkIKOZWCxoLvSGi0dGQM70fClCAPDX00c31Mznwt',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log({
          id:stripeToken.id,
          email:stripeToken.email,
          type:stripeToken.object,
          brand:stripeToken.card.brand,
          funding:stripeToken.card.funding,
          amount: `R${JSON.parse(`${localStorage.getItem('Total')}`)}`
        });
        
      },
    });

    



    paymentHandler.open({
      name: 'SSVK',
      currency: 'ZAR',
      description: 'Online Store',
      amount: amount * 100,
    });
  }
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51L7rKcDhBC8jyjnypr0JtrVsFuFe5Yti3kPElTx2rPqKEDmbR0edEj2g6smkIKOZWCxoLvSGi0dGQM70fClCAPDX00c31Mznwt',
          locale: 'auto',
          token: function (stripeToken: any) {
            alert('Payment has been successfull!');
            console.log(stripeToken);
            
          },
        });
      };
      
      window.document.body.appendChild(script);
      this.router.navigate(['/login'])
    }
     
  }
}