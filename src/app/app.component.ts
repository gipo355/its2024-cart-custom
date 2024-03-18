import { Component } from '@angular/core';
import { getVAT } from './cart-utils';
import { CartItem } from './cart-item.entity';
import { CartSourceService } from './services/cart-source.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items$ = this.cartSourceService.items$;

  vat = getVAT('IT');

  // DI: use cart source service in the code, request in constructor
  constructor(protected cartSourceService: CartSourceService) {}
  // or
  // protected cartSrv = inject(CartSourceService)

  trackById(_: number, item: CartItem) {
    return item.id;
  }

  changeQuantity(item: CartItem, newQuantity: number) {
    this.cartSourceService.setQuantity(item.id, newQuantity);
  }
}
