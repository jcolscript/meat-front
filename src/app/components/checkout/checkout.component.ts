import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/models/radio-option.model';

@Component({
  selector: 'mt-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Vale Refeição', value: 'REF'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
