import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthserService } from 'src/app/auth/services/authser.service';

export const adminGuard: CanActivateFn = (route, state) => {



  const _Router = inject(Router);
  const _AuthService = inject(AuthserService);
  // const role = _AuthService.role;




  if (localStorage.getItem('userToken') !== null && _AuthService.role == "SuperAdmin") {
    return true;
  } else {
    _Router.navigate(['/auth'])
    return false;
  }



};
