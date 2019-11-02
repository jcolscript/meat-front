import { NgModule } from '@angular/core';

import { ShoppingCartService } from 'app/services/shopping-cart.service';
import { OrderService } from 'app/services/order.service';
import { RestaurantsService } from 'app/services/restaurants.service';
import { NotificationService } from 'app/services/notification.service';
import { LoginService } from 'app/services/login.service';
import { LoggedInGuard } from 'app/components/security/loggedin.guard';


@NgModule({
  providers: [
    ShoppingCartService,
    OrderService,
    RestaurantsService,
    NotificationService,
    LoginService,
    LoggedInGuard
  ],
})
export class CoreModule {}
