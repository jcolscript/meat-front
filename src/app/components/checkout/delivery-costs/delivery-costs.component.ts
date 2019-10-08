import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html',
  styleUrls: ['./delivery-costs.component.css']
})
export class DeliveryCostsComponent implements OnInit {

  @Input() public deliveryFee: number;
  @Input() public itemsValue: number;

  constructor() { }

  ngOnInit() {
  }

  getTotal(): number {
    return this.deliveryFee + this.itemsValue;
  }

}
