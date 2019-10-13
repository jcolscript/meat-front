import { NgModule } from '@angular/core';

import { ShoppingCartService } from 'app/services/shopping-cart.service';
import { OrderService } from 'app/services/order.service';
import { RestaurantsService } from 'app/services/restaurants.service';


@NgModule({
  providers: [
    ShoppingCartService,
    OrderService,
    RestaurantsService
  ],
})
export class CoreModule {}
