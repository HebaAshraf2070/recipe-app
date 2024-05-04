import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthserService } from 'src/app/auth/services/authser.service';

export const userGuard: CanActivateFn = (route, state) => {



  const _Router = inject(Router);
  const _AuthService = inject(AuthserService);
  const role = _AuthService.role;

  if (localStorage.getItem('userToken') !== null && role == "SystemUser") {
    return true;
  } else {
    _Router.navigate(['/auth'])
    return false;
  }


};
