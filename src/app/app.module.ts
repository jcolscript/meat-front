import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from  '@angular/forms'
import { from } from 'rxjs/observable/from';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantComponent } from './components/restaurants/restaurant/restaurant.component'
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './components/restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './components/restaurant-detail/menu/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './components/restaurant-detail/menu/menu-item/menu-item.component';
import { ReviewsComponent } from './components/restaurant-detail/reviews/reviews.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { InputComponent } from './components/shared/input/input.component';
import { RadioComponent } from './components/shared/radio/radio.component';
import { OrderItemsComponent } from './components/checkout/order-items/order-items.component';

import { RestaurantsService } from './services/restaurants.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { OrderService } from './services/order.service';
import { DeliveryCostsComponent } from './components/checkout/delivery-costs/delivery-costs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    CheckoutComponent,
    InputComponent,
    RadioComponent,
    OrderItemsComponent,
    DeliveryCostsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    RestaurantsService,
    ShoppingCartService,
    OrderService,
    {provide: LOCALE_ID, useValue: 'pt-br'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
