import { createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.actions';
import { initialProductState } from './product.state';

export const productReducer = createReducer(
  initialProductState,
  on(ProductActions.loadProducts, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products: products,
    loading: false,
  })),
  on(ProductActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),
  on(ProductActions.addProduct, (state, { product }) => ({
    ...state,
    products: [...state.products, product],
  })),
  on(ProductActions.updateProduct, (state, { product }) => ({
    ...state,
    products: state.products.map((p) => (p.id === product.id ? product : p)),
  })),
  on(ProductActions.deleteProduct, (state, { productId }) => ({
    ...state,
    products: state.products.filter((p) => p.id !== productId),
  })),
);
