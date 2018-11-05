import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Meta, Title } from '@angular/platform-browser';
import { SiteDataService } from '../../../providers/site-data/site-data.service';
import { MatSnackBar } from '@angular/material';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {

  invalidLogin: boolean;
  pageTitle = 'Signup';
  pageDescription = 'Admin Signup Page';
  constructor(public adminService: AdminService,
              private metaData: Meta,
              private titleService: Title,
              private siteData: SiteDataService,
              private snackBar: MatSnackBar) {
    // set page title
    this.titleService.setTitle(this.pageTitle);
    // set page meta data
    this.metaData.addTags([
      {name: 'description', content: this.pageDescription},
      {name: 'keywords', content: this.siteData.siteKeywords},
      {name: 'author', content: this.siteData.siteName}
    ]);
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
  onSignUpWithEmailandPassword(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    console.log(email + ' ' + password);
    this.adminService.signUpWithEmailandPassword(email, password);
    this.snackBar.open('Authenticating', 'Welcome!', {
      duration: 2000
    });
  }

}
