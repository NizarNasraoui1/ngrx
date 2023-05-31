import { ProductState } from "./product.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductWrapper } from "./productWrapper.model";

const getProductFeatureState = createFeatureSelector<ProductState>("products");

export const getProducts = createSelector(
  getProductFeatureState,
  (state: ProductState) => state.products
);

export const getProductLoading = createSelector(
  getProductFeatureState,
  (state: ProductState) => state.loading
);

export const getProductLoaded = createSelector(
  getProductFeatureState,
  (state: ProductState) => state.loaded
);

export const getError = createSelector(
  getProductFeatureState,
  (state: ProductState) => state.error
);
