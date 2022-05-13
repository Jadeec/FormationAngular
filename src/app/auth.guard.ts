import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from './service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    //store this initial URL where the user came from (ex: my basket is full, i have to login in order to pay, once it's done i'll be redirected to my basket full)
    let url: string = state.url;
    //check if the user is logged in and redirect if not + redirect where it came from if logged
    if (this.authService.isLoggedIn) {
      return true;
    }

    this.authService.redirectUrl = url;

    return this.router.parseUrl('/login');
  }
}
