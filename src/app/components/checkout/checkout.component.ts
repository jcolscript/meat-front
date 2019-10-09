import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RadioOption } from 'app/models/radio-option.model';
import { CartItem } from 'app/models/cart-tem.model';
import { OrderService } from 'app/services/order.service';
import { Order, OrderItem } from 'app/models/order.model';

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
    private orderService: OrderService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  getItemsValue(): number {
    return this.orderService.getItemsValue();
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

  sendOrder(order: Order) {
    order.orderItems = this.getCartItems()
      .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));
    this.orderService.sendOrder(order)
      .subscribe((orderId) => {
        this.router.navigate(['/summary']);
        this.orderService.clear();
      })
    console.log(order);
  }

}
