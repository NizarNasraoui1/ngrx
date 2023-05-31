import { ProductState } from "./product.state";
import * as productActions from "./product.action";
import { ProductWrapper } from "./productWrapper.model";




export const initialState: ProductState = {
  products: new ProductWrapper(),
  loading: false,
  loaded: false,
  error: ""
};

export function productReducer(
  state = initialState,
  action: productActions.ProductActions
): ProductState {
  switch (action.type) {
    case productActions.ProductActionTypes.LOAD_PRODUCTS: {
      return {
        ...state,
        loading: true
      };
    }
    case productActions.ProductActionTypes.LOAD_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        products: action.payload
      };
    }
    case productActions.ProductActionTypes.LOAD_PRODUCTS_FAIL: {
      return {
        ...state,
        products: new ProductWrapper(),
        loading: false,
        loaded: false,
        error: action.payload
      };
    }
    case productActions.ProductActionTypes.ADD_PRODUCT_SUCCESS: {
      const newProduct = action.payload;
      const updatedProducts = [...state.products.products, newProduct]; // add new product to existing array of products
      const updatedProductWrapper = { ...state.products, products: updatedProducts }; // create new ProductWrapper object with updated products array
      return {
        ...state,
        products: updatedProductWrapper
      };
    }

    default: {
      return state;
    }
  }
}
