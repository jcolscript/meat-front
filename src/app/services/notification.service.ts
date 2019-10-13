import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class NotificationService {

  public notifier = new EventEmitter<string>();

  constructor() { }

  notify(message: string) {
    this.notifier.emit(message);
  }

}
