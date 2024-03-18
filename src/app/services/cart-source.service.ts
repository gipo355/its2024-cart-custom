import { Injectable } from '@angular/core';
import { CART } from '../cart';
import { Subject } from 'rxjs';
import { CartItem } from '../cart-item.entity';

@Injectable({
  providedIn: 'root',
})
export class CartSourceService {
  private items = [...CART];

  items$ = new Subject<CartItem[]>();

  getCart() {
    return [...CART];
  }

  constructor() {
    this.items$.next(this.items);
  }

  setQuantity(id: number, quantity: number) {
    const index = this.items.findIndex((item) => item.id === id);
    const tmp = structuredClone(this.items);
    tmp[index].quantity = quantity;
    this.items = tmp;
    this.items$.next(this.items);
  }
}
