import { Injectable } from '@angular/core';
import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { LoginService } from 'app/services/login.service';

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {

  constructor(
    private loginService: LoginService,
  ) {}

  checkAuth(path: string): boolean {
    const loggedIn = this.loginService.isLoggedIn();
    if (!loggedIn) {
      this.loginService.handleLogin(`/${path}`);
    }
    return loggedIn;
  }

  canLoad(route: Route): boolean {
    return this.checkAuth(route.path)
  }

  canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
    return this.checkAuth(activatedRoute.routeConfig.path);
  }
}
