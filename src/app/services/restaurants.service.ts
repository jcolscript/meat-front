import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Restaurant } from "app/models/restaurant.model";

import { environment } from 'environments/environment';
import { ErrorHandler } from '../handler/error.handler';

@Injectable()
export class RestaurantsService {
  public env = environment;

  constructor(private http: Http){}

  get Restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${this.env.MEAT_API}restaurants1`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

}
