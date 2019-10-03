import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CartItem } from 'app/models/cart-tem.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[];
  @Output() increaseQtd = new EventEmitter<CartItem>();
  @Output() decreaseQtd = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQtd(item: CartItem): void {
    this.increaseQtd.emit(item);
  }

  emitDecreaseQtd(item: CartItem): void {
    this.decreaseQtd.emit(item);
  }

  emitRemove(item: CartItem): void {
    this.remove.emit(item);
  }

}
