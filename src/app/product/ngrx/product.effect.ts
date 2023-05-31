import { Injectable } from "@angular/core";
import { ofType } from "@ngrx/effects";
import { Actions, createEffect } from '@ngrx/effects';
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { ProductService } from "../services/product.service";
import * as productActions from './product.action';
import {  ProductWrapper } from "./productWrapper.model";

@Injectable()
export class ProductEffect{
  constructor(
    private actions$:Actions,private productService:ProductService
  ){}

  loadProducts$ = createEffect(()=>
  this.actions$.pipe(
    ofType<productActions.LoadProducts>(productActions.ProductActionTypes.LOAD_PRODUCTS),
    mergeMap((actions: productActions.LoadProducts) =>
      this.productService.getAllProducts().pipe(
        map(
          (products: ProductWrapper) =>
            new productActions.LoadProductSuccess(products)
        ),
        catchError(err => of(new productActions.LoadProductFail(err)))
      )
    )
  )
  )

  addProduct$ = createEffect(()=>
  this.actions$.pipe(
    ofType<productActions.AddProduct>(productActions.ProductActionTypes.ADD_PRODUCT),
    map((action: productActions.AddProduct)=>action.payload),
    mergeMap((action: productActions.AddProduct) =>
      this.productService.addProduct(action).pipe(
        map(
          (product: any) =>
            new productActions.AddProductSuccess(product)
        ),
        catchError(err => of(new productActions.LoadProductFail(err)))
      )
    )
  )
  )



}
