import { Injectable, Signal } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ProductActions from './product.actions';
import { Product } from './models/product';
import { AppState } from '../app.state';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ProductFacade {
  products$: Observable<Product[]> = this.store.pipe(select((state) => state.products.products));

  constructor(private store: Store<AppState>) {}

  // Dispatch des actions
  loadProducts() {
    this.store.dispatch(ProductActions.loadProducts());
  }

  addProduct(product: Product) {
    this.store.dispatch(ProductActions.addProduct({ product }));
  }
}
