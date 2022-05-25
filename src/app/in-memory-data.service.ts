import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
        { id: 1, name: 'ITEM1', price: 10.95, description: 'desc1', image:'', quantity:1},
        { id: 2, name: 'ITEM2', price: 11.95, description: 'desc2', image: '', quantity:1},
        { id: 3, name: 'ITEM3', price: 12.95 , description: 'desc3', image: '', quantity:1},
        { id: 4, name: 'ITEM4', price: 13.95, description: 'desc4', image: '', quantity:1},
        { id: 5, name: 'ITEM5', price: 14.95 , description: 'desc5',image:'', quantity:1},
        { id: 6, name: 'ITEM6', price: 15.95 , description: 'desc6', image:'', quantity:1 },
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