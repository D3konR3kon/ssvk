import { Injectable } from '@angular/core';
import { PRODUCTS } from './mock-products';
import { Product } from './product';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'api/products'
 
  constructor(
    private http: HttpClient,
    // private messageService: MessageService
    ) { }

  
  /** GET products from the server */
getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.productsUrl)
}
  

getProduct(id: number): Observable<Product> {
  const url = `${this.productsUrl}/${id}`;
  return this.http.get<Product>(url)
  }
}


