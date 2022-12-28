import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    ) { }

  canActivate(route: ActivatedRouteSnapshot) {

    const user = this.authService.userData;

    if (user) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
