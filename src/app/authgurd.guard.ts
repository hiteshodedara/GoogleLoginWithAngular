import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginAuthService } from './login-auth.service';

export const authgurdGuard: CanActivateFn = (route, state) => {
  const authservice=inject(LoginAuthService)
  const router=inject(Router)

  const is_auth = authservice.is_user_login()

  if(is_auth===true){
    return true
  }
else{
  router.navigate(['/register']);
  return false
}
};
