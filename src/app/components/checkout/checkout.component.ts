import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import 'rxjs/add/operator/do';

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

  public cartItems: CartItem[];
  public checkoutForm: FormGroup;
  public orderData: Order;
  // tslint:disable-next-line: max-line-length
  public emailPattern =   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  public numberPattern = /^(0|[1-9][0-9]*)$/;
  public deliveryFee = 8;
  public orderId: string;
  public paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Vale Refeição', value: 'REF'}
  ];

  constructor(
    private orderService: OrderService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  static equalsTo(group: AbstractControl): {[key: string]: boolean} {
    const email = group.get('email');
    const emailConfimation = group.get('emailConfimation');

    if (!email || !emailConfimation) {
      return undefined;
    }

    if (email.value != emailConfimation.value) {
      return { emailsNotMatch: true };
    }

    return undefined;
  }

  ngOnInit() {
    this.checkoutForm = new FormGroup({
      name: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      email: this.fb.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfimation: this.fb.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      number: this.fb.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      optionalAddress: this.fb.control(''),
      paymentOption: this.fb.control('', [Validators.required])
    }, {validators: [CheckoutComponent.equalsTo], updateOn: 'blur'});
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

  isOrderCompleted(): boolean {
    return this.orderId !== undefined;
  }

  sendOrder(order: Order) {
    order.orderItems = this.getCartItems()
      .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));
    this.orderService.sendOrder(order)
      .do((orderId) => {
        this.orderId = orderId;
      })
      .subscribe((orderId) => {
        this.router.navigate(['/summary']);
        this.orderService.clear();
      });
    console.log(order);
  }

}
