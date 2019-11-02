import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'app/components/shared/shared.module';

import { CheckoutComponent } from 'app/components/checkout/checkout.component';
import { OrderItemsComponent } from 'app/components/checkout/order-items/order-items.component';
import { DeliveryCostsComponent } from 'app/components/checkout/delivery-costs/delivery-costs.component';
import { LeaveCheckoutGuard } from './leave-checkout.guard';

const ROUTES: Routes = [
  {path: '', component: CheckoutComponent, canDeactivate: [LeaveCheckoutGuard]}
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
