import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../ngrx/product.model';
import { ProductWrapper } from '../ngrx/productWrapper.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<any>{
    return this.http.get("https://dummyjson.com/products");
  }

  addProduct(product:any):Observable<any>{
    return this.http.post("https://dummyjson.com/products/add",product);
  }
}
