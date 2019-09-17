import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'app/models/menu-item.model';
import { Observable } from 'rxjs';
import { RestaurantsService } from 'app/services/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menu: Observable<MenuItem[]>;

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.menu = this.restaurantsService
      .menuOfRestaurant(this.route.parent.snapshot.params['id']);
  }

}
