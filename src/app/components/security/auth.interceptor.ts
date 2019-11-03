import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginService } from 'app/services/login.service';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

constructor(private injector: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const loginService = this.injector.get(LoginService);
    if (loginService.isLoggedIn()) {
      const authReq = req.clone({setHeaders: {'Authorization': `Bearer ${loginService.user.accessToken}`}});
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
