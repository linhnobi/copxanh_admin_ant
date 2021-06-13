import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from './../../modules/auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        console.log('currentUser :', currentUser);
        if (currentUser) {
            console.log('2');
            return true;
        }
        console.log('1');
        this.router.navigate(['admin/auth/login'], { queryParams: { returnUrl: state.url } });
        return false
    }

}


