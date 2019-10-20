import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export class ErrorHandler {

  static handleError(error: HttpErrorResponse | any) {
    let message: string;
    if (error instanceof HttpErrorResponse) {
      const err = error.error;
      message = `Erro ${err.status} ao acessar a URL ${err.url} - ${err.statusText}`;
    } else {
      message = error.toString();
    }
    console.log(message);
    return Observable.throw(message);
  }

}
