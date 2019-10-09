import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { RestaurantsComponent } from "./components/restaurants/restaurants.component";
import { RestaurantDetailComponent } from "./components/restaurant-detail/restaurant-detail.component";
import { MenuComponent } from "./components/restaurant-detail/menu/menu.component";
import { ReviewsComponent } from "./components/restaurant-detail/reviews/reviews.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { SummaryComponent } from "./components/summary/summary.component";

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'restaurants/:id', component: RestaurantDetailComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full'},
      { path: 'menu', component: MenuComponent },
      { path: 'reviews', component: ReviewsComponent }
    ]
  },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'about', component: AboutComponent }
]
