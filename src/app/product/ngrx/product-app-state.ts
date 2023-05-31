import * as fromRoot from "./app-state";
import { ProductState } from "./product.state";


export interface ProductAppState extends fromRoot.AppState {
  products: ProductState;
}
