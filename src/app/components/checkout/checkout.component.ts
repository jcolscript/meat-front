import { Component, OnInit } from '@angular/core';

import { RadioOption } from 'app/models/radio-option.model';
import { CartItem } from 'app/models/cart-tem.model';
import { OrderService } from 'app/services/order.service';

@Component({
  selector: 'mt-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public cartItems: CartItem[]
  public paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Vale Refeição', value: 'REF'}
  ]
  public deliveryFee: number = 8;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
  }

  getitemsValue(): number {
    return this.orderService.getitemsValue();
  }

  getCartItems() {
    return this.orderService.getCartItems();
  }

  increaseQtd(item: CartItem) {
    this.orderService.increaseQtd(item);
  }

  decreaseQtd(item: CartItem) {
    this.orderService.decreaseQtd(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }

}
