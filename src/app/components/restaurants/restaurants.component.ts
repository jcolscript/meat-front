import { Component, OnInit } from '@angular/core';

import { Restaurant } from 'app/models/restaurant.model';

import { RestaurantsService } from 'app/services/restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  public restaurants: Restaurant[];

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurants = this.restaurantsService.Restaurants;
  }

}
