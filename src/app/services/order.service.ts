import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Http, Headers, RequestOptions } from '@angular/http';
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
    private http: Http
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

  clear(){
    this.shoppingCartService.clear();
  }

  sendOrder(order: Order): Observable<string> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.env.MEAT_API}orders`,
                          JSON.stringify(order),
                          new RequestOptions({headers: headers}))
                    .map(response => response.json())
                    .map(order => order.id);
  }

}
