import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './shared.module';

import { CheckoutComponent } from 'app/components/checkout/checkout.component';
import { OrderItemsComponent } from 'app/components/checkout/order-items/order-items.component';
import { DeliveryCostsComponent } from 'app/components/checkout/delivery-costs/delivery-costs.component';

const ROUTES: Routes = [
  {path: '', component: CheckoutComponent}
]

@NgModule({
  declarations: [
    CheckoutComponent,
    OrderItemsComponent,
    DeliveryCostsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
})
export class CheckoutModule {}
