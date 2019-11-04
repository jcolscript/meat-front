import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { NotificationService } from './services/notification.service';
import { LoginService } from './services/login.service';
import { LoginComponent } from './components/security/login/login.component';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {

  constructor(
    private notificationService: NotificationService,
    private injector: Injector,
    private zone: NgZone
  ) {
    super();
  }

  handleError(errorResponse: HttpErrorResponse | any) {
    if (errorResponse instanceof HttpErrorResponse) {
      const message = errorResponse.error.message;
      this.zone.run(() => {
        switch (errorResponse.status) {
          case 401:
            // tslint:disable-next-line: deprecation
            this.injector.get(LoginComponent).login();
            break;
          case 403:
            this.notificationService.notify(message || 'Não autorizado');
            break;
          case 404:
            this.notificationService.notify(message || 'Recurso não encontrado');
            break;
        }
      });
    }
    super.handleError(errorResponse);
  }

}
