import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { CheckoutComponent } from './checkout.component';

export class LeaveCheckoutGuard implements CanDeactivate<CheckoutComponent> {
  canDeactivate(checkoutComponent: CheckoutComponent, activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot ): boolean {
    if (!checkoutComponent.isOrderCompleted()) {
      return window.confirm('Deseja desistir da compra?');
    } else {
      return true;
    }
  }
}
