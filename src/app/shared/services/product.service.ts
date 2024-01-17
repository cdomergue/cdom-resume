import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../store/product/models/product';
import { ProductType } from '../store/product/models/product-type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProducts(): Observable<Product[]> {
    return new Observable((subscriber) => {
      const waitTime = 500 + Math.random() * 500;

      setTimeout(() => {
        const response = [
          {
            id: 1,
            type: ProductType.AIRPLANE,
            name: 'Airbus A320',
            description: 'Airbus A320 standard',
            price: 87000000,
          },
          {
            id: 2,
            type: ProductType.BUILDING,
            name: 'Immeuble 42',
            description: 'Un immeuble de 4 étages',
            price: 845000000,
          },
          {
            id: 3,
            type: ProductType.VEHICLE,
            name: 'Tesla Model 3',
            description: 'Model 3 Grande Autonomie',
            price: 50990,
          },
        ];
        subscriber.next(response);
        subscriber.complete();
      }, waitTime);
    });
  }
}
