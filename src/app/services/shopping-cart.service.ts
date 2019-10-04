import { Injectable } from '@angular/core';
import { CartItem } from 'app/models/cart-tem.model';
import { MenuItem } from 'app/models/menu-item.model';

@Injectable()
export class ShoppingCartService {

  public items: CartItem[] = []

  constructor() { }

  clear() {
    this.items = [];
  }

  addItem(item: MenuItem) {
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
    if(foundItem) {
      this.increaseQtd(foundItem);
    } else {
      this.items.push(new CartItem(item));
    }
  }

  increaseQtd(item: CartItem) {
    item.quantity += 1;
  }

  decreaseQtd(item: CartItem) {
    item.quantity -= 1
    if (item.quantity == 0) {
      this.removeItem(item);
    }
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  total(): number {
    return this.items
      .map((item) => item.value())
      .reduce((sum, next) => sum + next, 0);
  }

}
