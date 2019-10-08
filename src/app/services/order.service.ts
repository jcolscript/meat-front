import { Injectable } from '@angular/core';

import { ShoppingCartService } from './shopping-cart.service';
import { CartItem } from 'app/models/cart-tem.model';

@Injectable()
export class OrderService {

  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  getitemsValue(): number {
    return this.shoppingCartService.total();
  }

  getCartItems(): CartItem[] {
    return this.shoppingCartService.items;
  }

  increaseQtd(item: CartItem) {
    this.shoppingCartService.increaseQtd(item);
  }

  decreaseQtd(item: CartItem) {
    this.shoppingCartService.decreaseQtd(item);
  }

  remove(item: CartItem) {
    this.shoppingCartService.removeItem(item);
  }

}
