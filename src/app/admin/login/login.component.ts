import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Meta, Title } from '@angular/platform-browser';
import { SiteDataService } from '../../../providers/site-data/site-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  invalidLogin: boolean;
  pageTitle: string = 'Login';
  pageDescription: string = 'Admin Login Page';
  constructor(public adminService: AdminService,
              private metaData: Meta,
              private titleService: Title,
              private siteData: SiteDataService) {
    this.titleService.setTitle(this.pageTitle);
    this.metaData.addTags([
      {name: 'description', content: this.pageDescription},
      {name: 'keywords', content: this.siteData.siteKeywords},
      {name: 'author', content: this.siteData.siteName}
    ]);
  }

  // log in with Google credentials
  onLoginWithGoogle() {
    this.adminService.loginWithGoogle();
  }

  // log in with Facebook credentials
  onLoginWithFacebook() {
    this.adminService.loginWithFacebook();
  }

  // log in with Twitter credentials
  onLoginWithTwitter() {
    this.adminService.loginWithTwitter();
  }

  // sign in using email and password
  onLoginWithEmailandPassword(email, password) {
    this.adminService.signInWithEmailAndPassword(email, password);
  }
}
