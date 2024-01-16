import { Product } from './models/product';

export interface ProductState {
  products: Product[];
  selectedProductId: number | null;
  loading: boolean;
  error: any;
}

export const initialProductState: ProductState = {
  products: [],
  selectedProductId: null,
  loading: false,
  error: null,
};
