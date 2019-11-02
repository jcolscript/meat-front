import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';

import { User } from 'app/models/user.model';
import { environment } from 'environments/environment';

@Injectable()
export class LoginService {
  public env = environment;
  public user: User;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  isLoggedIn(): boolean {
    return this.user !== undefined;
  }

  login(email: string, pass: string): Observable<User> {
    return this.http.post<User>(`${this.env.MEAT_API}login`, {email: email, pass: pass})
      .do(user => this.user = user);
  }

  handleLogin(path?: string) {
    this.router.navigate(['/login', btoa(path)]);
  }
}
