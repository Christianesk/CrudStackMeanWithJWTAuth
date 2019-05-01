import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../../models/products/product';
import {Config} from '../../../app/config';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private token: string;
  private config: Config = new Config();

  selectedProduct: Product;
  products: Product[];

  constructor(private http: HttpClient,private auth: AuthenticationService) { 
    this.selectedProduct = new Product();
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  getProducts() {
    this.auth.product().subscribe((res) => {
      this.products=res as Product[];
      });
  }

  postProduct(product: Product) {
    return this.http.post(this.config.URL_BACKEND_API + 'product', product, { headers: { Authorization: `Bearer ${this.getToken()}` } })
  }

  putProduct(product: Product) {
    return this.http.put(this.config.URL_BACKEND_API + `product/${product._id}`, product, { headers: { Authorization: `Bearer ${this.getToken()}` } })
  }

  deleteProduct(_id: string) {
    return this.http.delete(this.config.URL_BACKEND_API + 'product/' + _id, { headers: { Authorization: `Bearer ${this.getToken()}` } })
  }


}
