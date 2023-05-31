import { Component, OnInit } from '@angular/core';
import { AppState } from '../ngrx/app-state';
import { ProductService } from '../services/product.service';
import * as fromProduct from '../ngrx/product.reducer';
import { select, Store } from '@ngrx/store';
import * as productActions from "../ngrx/product.action";
import * as productSelectors from "../ngrx/product.selector";
import { map, Observable } from 'rxjs';
//import { pipe } from 'rxjs';
import { ProductWrapper } from "../ngrx/productWrapper.model";
import { ProductAppState } from '../ngrx/product-app-state';
import { Product } from '../ngrx/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  productsWrapper$:Observable<ProductWrapper>;
  products$:Observable<Product[]>;
  constructor(private store:Store<ProductAppState>,private service:ProductService){

  }
  ngOnInit(): void {
    this.store.dispatch(new productActions.LoadProducts());
    this.productsWrapper$=this.store.pipe(select(productSelectors.getProducts));
    this.products$=this.productsWrapper$.pipe(map((p)=>p.products));




  }

  addProduct(){
    this.store.dispatch(new productActions.AddProduct({"title":"new title"}));
  }


}
