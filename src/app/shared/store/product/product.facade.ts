import { Injectable, Signal } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ProductActions from './product.actions';
import { Product } from './models/product';
import { AppState } from '../app.state';
import { toSignal } from '@angular/core/rxjs-interop';
import { deleteProduct } from './product.actions';

@Injectable({
  providedIn: 'root',
})
export class ProductFacade {
  products$: Observable<Product[]> = this.store.pipe(select((state) => state.products.products));
  isLoading$ = this.store.pipe(select((state) => state.products.loading));

  constructor(private store: Store<AppState>) {}

  loadProducts() {
    this.store.dispatch(ProductActions.loadProducts());
  }

  addProduct(product: Product) {
    this.store.dispatch(ProductActions.addProduct({ product }));
  }

  deleteProduct(productId: number) {
    this.store.dispatch(ProductActions.deleteProduct({ productId }));
  }
}
