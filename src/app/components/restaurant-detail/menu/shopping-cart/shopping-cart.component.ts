import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'app/services/shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
  }

  items() {
    return this.shoppingCartService.items;
  }

  total() {
    return this.shoppingCartService.total();
  }

}
