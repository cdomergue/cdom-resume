import { ProductType } from './product-type';

export interface Product {
  id: number;
  name: string;
  type: ProductType;
  price: number;
  description?: string;
}
