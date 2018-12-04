import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router} from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material';

import { AdminService } from '../admin.service';
import { SiteDataService } from '../../../providers/site-data/site-data.service';
import { UserService } from '../../../providers/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  invalidLogin: boolean;
  pageTitle = 'Login';
  pageDescription = 'Admin Login Page';
  constructor(public adminService: AdminService,
              private metaData: Meta,
              private titleService: Title,
              private siteData: SiteDataService,
              private snackBar: MatSnackBar,
              private router: Router,
              private userService: UserService) {
    // set page title
    this.titleService.setTitle(this.pageTitle);
    // set page meta data
    this.metaData.addTags([
      {name: 'description', content: this.pageDescription},
      {name: 'keywords', content: this.siteData.siteKeywords},
      {name: 'author', content: this.siteData.siteName}
    ]);

    this.adminService.user$.subscribe(user => {
      if (user) {
        this.userService.save(user);
        const returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    });
  }

  // sign up with Google credentials
  onSignUpWithGoogle() {
    this.adminService.loginWithGoogle();
    this.snackBar.open('Authenticating With Google', 'Welcome!', {
      duration: 2000
    });
  }

  // sign up with Facebook credentials
  onSignUpWithFacebook() {
    this.adminService.loginWithFacebook();
    this.snackBar.open('Authenticating With Facebook', 'Welcome!', {
      duration: 2000
    });
  }

  // log in with Twitter credentials
  onSignUpWithTwitter() {
    this.adminService.loginWithTwitter();
    this.snackBar.open('Authenticating With Twitter', 'Welcome!', {
      duration: 2000
    });
  }


  // sign in using email and password
  onSignInWithEmailandPassword(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    console.log(email + ' ' + password);
    this.adminService.signInWithEmailAndPassword(email, password);
    this.snackBar.open('Authenticating', 'Welcome!', {
      duration: 2000
    });
  }
}
