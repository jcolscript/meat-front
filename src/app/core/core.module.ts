import { NgModule } from '@angular/core';

import { ShoppingCartService } from 'app/services/shopping-cart.service';
import { OrderService } from 'app/services/order.service';
import { RestaurantsService } from 'app/services/restaurants.service';
import { NotificationService } from 'app/services/notification.service';


@NgModule({
  providers: [
    ShoppingCartService,
    OrderService,
    RestaurantsService,
    NotificationService
  ],
})
export class CoreModule {}
