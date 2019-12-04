import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { tap, filter} from 'rxjs/operators';

import { User } from 'app/models/user.model';
import { environment } from 'environments/environment';

@Injectable()
export class LoginService {
  public env = environment;
  public user: User;
  public actualUrl: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe((e: NavigationEnd) => this.actualUrl = e.url);
  }

  isLoggedIn(): boolean {
    return this.user !== undefined;
  }

  login(email: string, pass: string): Observable<User> {
    return this.http.post<User>(`${this.env.MEAT_API}login`, {email: email, pass: pass})
      .pipe(tap(user => this.user = user));

  }

  logout() {
    this.user = undefined;
    this.handleLogin('/');
  }

  handleLogin(path: string = this.actualUrl) {
    this.router.navigate(['/login', btoa(path)]);
  }
}
