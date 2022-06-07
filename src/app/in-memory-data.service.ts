import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: 1, name: 'CRATES OF GOODNESS', price: 75.00, description: 'Crate of Goodness is a fabulous gift box curated to bring health.',image:'https://cdn.shopify.com/s/files/1/0717/1599/products/gift-boxes-hampers-crate-of-goodness-1_800x.jpg?v=1618467961', quantity:1},
      { id: 2, name: 'FAMILY PICNIC TIME NOW  ', price: 62.00 , description: 'Family picnic time is so important nowadays.It includes Fererro Rocher.',image:'https://cdn.shopify.com/s/files/1/0717/1599/products/gift-boxes-hampers-family-picnic-time-1_800x.jpg?v=1618467987', quantity:1},
      { id: 3, name: 'SCRUMPTIOUS GIFT BOX', price: 57.00, description: 'Delicious red wine and yummy snacks are always going to ',image:'https://cdn.shopify.com/s/files/1/0717/1599/products/gift-boxes-hampers-simply-scrumptious-gift-box-1_800x.jpg?v=1618468112', quantity:1},
      { id: 4, name: 'BABY BOY GIFT BOX', price: 78.00 , description: 'A unique gift box for new baby flowers and gift delivery.',image:'https://cdn.shopify.com/s/files/1/0717/1599/products/BabyBoyGiftBox_FabulousFlowers_800x.jpg?v=1621859994', quantity:1},
      { id: 5, name: 'SWEET SERENITY', price: 66.00, description: 'Oh sweet serenity!It includes MamaMacs butter biscuits,Perfume sachets', image:'https://cdn.shopify.com/s/files/1/0717/1599/products/SweetSerenity_FabulousFlowers_2048x.jpg?v=1629832785', quantity:1},
      { id: 6, name: 'THE HEALING LIGHT', price: 95.00 , description: 'The Healing Light Gift Set embodies the healing energy.', image:'https://cdn.shopify.com/s/files/1/0717/1599/products/HealingLightGift_Fabulousflowers_800x.jpg?v=1646659804', quantity:1},

     
      ];
    return {products};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 11;
  }
}