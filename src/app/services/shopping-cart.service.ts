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
      foundItem.quantity += 1;
    } else {
      this.items.push(new CartItem(item));
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
