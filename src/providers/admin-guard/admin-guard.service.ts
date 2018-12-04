import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AdminService} from '../../app/admin/admin.service';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private adminService: AdminService,
              private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
   return this.adminService.user$.map(user => {
      if (user) {
        return true;
      } else {
        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        return false;
      }
    });
  }
}
