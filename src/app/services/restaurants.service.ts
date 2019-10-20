import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Restaurant } from 'app/models/restaurant.model';
import { MenuItem } from 'app/models/menu-item.model';

import { environment } from 'environments/environment';
import { ErrorHandler } from '../handler/error.handler';

@Injectable()
export class RestaurantsService {
  public env = environment;

  constructor(private http: HttpClient) {}

  getRestaurants(search?: string): Observable<Restaurant[]> {
    let params: HttpParams;
    if (search) {
      params = new HttpParams().set('q', search);
    }
    return this.http.get<Restaurant[]>(`${this.env.MEAT_API}restaurants`, {params: params});
  }

  restaurantsById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${this.env.MEAT_API}restaurants/${id}`)
  }

  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${this.env.MEAT_API}restaurants/${id}/reviews`)
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${this.env.MEAT_API}restaurants/${id}/menu`)
  }

}
