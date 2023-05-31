import { ProductWrapper } from "./productWrapper.model";

export interface ProductState {
  products: ProductWrapper;
  loading: boolean;
  loaded: boolean;
  error: string;
}
