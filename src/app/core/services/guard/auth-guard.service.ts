import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthServiceService } from '../auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthServiceService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isUserLoggedIn()) {
      return true;
    }

    this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
    return false;

}

  // canActivate(
  // route: ActivatedRouteSnapshot,
  // state: RouterStateSnapshot): Promise<boolean> | boolean {
  //    return new Promise(resolve =>
  //      this.authService.isUserLoggedIn().then(status: boolean => {
  //          if(status === false) {
  //            this.router.navigate(['login']);
  //          }
  //          resolve(status);
  //        })
  //        .catch(() => {
  //          this.router.navigate(['login']);
  //          resolve(false);
  //          // ... or any other way you want to handle such error case
  //        })
  //       }
    }



