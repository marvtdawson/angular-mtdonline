import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

  constructor(private authService: AuthService,
              private router: Router) {
    this.authService.user$.subscribe(user => {
      if (user) {
        const returnUrl = localStorage.getItem('reuturnUrl');
        router.navigateByUrl(returnUrl);
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    /*this.authService.user$.unsubscribe();*/
  }

}
