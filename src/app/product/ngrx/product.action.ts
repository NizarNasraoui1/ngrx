import { Action } from "@ngrx/store";
import { ProductWrapper } from "./productWrapper.model";

export enum ProductActionTypes {
  LOAD_PRODUCTS = "[Product] Load PRODUCT",
  LOAD_PRODUCTS_SUCCESS = "[Product] Load PRODUCT Success",
  LOAD_PRODUCTS_FAIL = "[Product] Load PRODUCT Fail",
  ADD_PRODUCT = "[Product] Add Product",
  ADD_PRODUCT_SUCCESS = "[Product] Add Product Success"
}

export class LoadProducts implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS;
}

export class LoadProductSuccess implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS_SUCCESS;
  constructor(public payload: ProductWrapper) {}
}

export class LoadProductFail implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS_FAIL;
  constructor(public payload: string) {}
}

export class AddProduct implements Action {
  readonly type = ProductActionTypes.ADD_PRODUCT;
  constructor(public payload:any) {}
}

export class AddProductSuccess implements Action {
  readonly type = ProductActionTypes.ADD_PRODUCT_SUCCESS;
  constructor(public payload:any) {}
}

export type ProductActions = LoadProducts | LoadProductSuccess | LoadProductFail | AddProduct | AddProductSuccess;



