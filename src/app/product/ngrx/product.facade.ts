import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromProduct from './product.reducer';
import * as ProductActions from './product.action';
import * as productSelectors from "../ngrx/product.selector";
import { Observable } from 'rxjs';
import { ProductWrapper } from './productWrapper.model';
import { AppState } from './app-state';

@Injectable({providedIn: 'root'})
export class ProductFacade {
  constructor(private store: Store<AppState>) {}

  // Selectors
  products$: Observable<ProductWrapper> = this.store.select(productSelectors.getProducts);
  loading$: Observable<boolean> = this.store.select(productSelectors.getProductLoading);
  loaded$: Observable<boolean> = this.store.select(productSelectors.getProductLoaded);
  error$: Observable<string> = this.store.select(productSelectors.getError);

  // Dispatching actions
  loadProducts() {
    this.store.dispatch(new ProductActions.LoadProducts());
  }

  addProduct(product: any) {
    this.store.dispatch(new ProductActions.AddProduct({"title":"new title"}));
  }

  

}
