import { Component, inject } from '@angular/core';
import { CART } from './cart';
import { getVAT } from './cart-utils';
import { CartItem } from './cart-item.entity';
import { CartSourceService } from './services/cart-source.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected cartSourceService = new CartSourceService();
  // items = CART;
  items = this.cartSourceService.getCart();

  vat = getVAT('IT');

  // DI: use cart source service in the code, request in constructor
  constructor(cartSourceService: CartSourceService) {
    this.cartSourceService = cartSourceService;
  }
  // or
  // protected cartSrv = inject(CartSourceService)

  trackById(_: number, item: CartItem) {
    return item.id;
  }

  changeQuantity(item: CartItem, newQuantity: number) {
    const index = this.items.indexOf(item);
    const tmp = structuredClone(this.items);
    tmp[index].quantity = newQuantity;
    this.items = tmp;
  }
}
