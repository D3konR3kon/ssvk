import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})

export class PaymentComponent {
  paymentHandler: any = null;
  totAmount = this.cartService.Total()

  constructor(private cartService : CartService) {}
  ngOnInit(): void {
    this.cartService.Total();
    this.invokeStripe();
  }
  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51H7bbSE2RcKvfXD4DZhu',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        alert('Stripe token generated!');
      },
    });
    paymentHandler.open({
      name: 'Positronx',
      description: '3 widgets',
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
          key: 'pk_test_51H7bbSE2RcKvfXD4DZhu',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }
}