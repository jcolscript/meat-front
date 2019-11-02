import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantComponent } from './components/restaurants/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './components/restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './components/restaurant-detail/menu/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './components/restaurant-detail/menu/menu-item/menu-item.component';
import { ReviewsComponent } from './components/restaurant-detail/reviews/reviews.component';
import { SummaryComponent } from './components/summary/summary.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/security/login/login.component';

import { SharedModule } from './components/shared/shared.module';
import { CoreModule } from './core/core.module';
import { UserDetailComponent } from './components/header/user-detail/user-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    SummaryComponent,
    NotFoundComponent,
    LoginComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules})
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-br'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
