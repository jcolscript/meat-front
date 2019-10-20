import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { ShoppingCartService } from './shopping-cart.service';
import { CartItem } from 'app/models/cart-tem.model';
import { Order, OrderItem } from 'app/models/order.model';
import { environment } from 'environments/environment';

@Injectable()
export class OrderService {

  public env = environment;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private http: HttpClient
  ) { }

  getItemsValue(): number {
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

  clear() {
    this.shoppingCartService.clear();
  }

  sendOrder(order: Order): Observable<string> {
    return this.http.post<Order>(`${this.env.MEAT_API}orders`, order)
      .map((orderRes) => orderRes.id);
  }

}
