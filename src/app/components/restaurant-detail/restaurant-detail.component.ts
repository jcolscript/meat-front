import { Component, OnInit } from '@angular/core';

import { Restaurant } from 'app/models/restaurant.model';
import { RestaurantsService } from 'app/services/restaurants.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  public restaurant: Restaurant;

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.restaurantsService.restaurantsById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant);
  }

}
