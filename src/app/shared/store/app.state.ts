import { initialProductState, ProductState } from './product/product.state';

export interface AppState {
  products: ProductState;
}

export const initialAppState: AppState = {
  products: initialProductState,
};

export function getInitialState(): AppState {
  return initialAppState;
}
