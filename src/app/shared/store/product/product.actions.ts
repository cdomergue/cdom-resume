import { createAction, props } from '@ngrx/store';
import { Product } from './models/product';

export const loadProducts = createAction('[Product] Load Products');

export const loadProductsSuccess = createAction('[Product] Load Products Success', props<{ products: Product[] }>());

export const loadProductsFailure = createAction('[Product] Load Products Failure', props<{ error: any }>());

export const addProduct = createAction('[Product] Add Product', props<{ product: Product }>());

export const updateProduct = createAction('[Product] Update Product', props<{ product: Product }>());

export const deleteProduct = createAction('[Product] Delete Product', props<{ productId: number }>());
