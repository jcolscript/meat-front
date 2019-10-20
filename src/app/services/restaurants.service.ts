import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Restaurant } from "app/models/restaurant.model";
import { MenuItem } from "app/models/menu-item.model";

import { environment } from 'environments/environment';
import { ErrorHandler } from '../handler/error.handler';

@Injectable()
export class RestaurantsService {
  public env = environment;

  constructor(private http: Http){}

  getRestaurants(search?: string): Observable<Restaurant[]> {
    return this.http.get(`${this.env.MEAT_API}restaurants`, {params:{q: search}})
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  restaurantsById(id: string): Observable<Restaurant>{
    return this.http.get(`${this.env.MEAT_API}restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  reviewsOfRestaurant(id: string): Observable<any>{
    return this.http.get(`${this.env.MEAT_API}restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http.get(`${this.env.MEAT_API}restaurants/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

}
