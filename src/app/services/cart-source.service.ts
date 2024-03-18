import { Injectable } from '@angular/core';
import { CART } from '../cart';

@Injectable({
  providedIn: 'root',
})
export class CartSourceService {
  getCart() {
    return [...CART];
  }
}
