import { Component, OnInit } from '@angular/core';
import {SiteDataService} from '../../../providers/site-data.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import { Router } from '@angular/router';
import {AuthService} from '../../auth/auth.service';


@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  isHomePage: boolean;

  constructor(private siteData: SiteDataService,
              private dialog: MatDialog,
              private router: Router,
              public authService: AuthService) {

  }

  sitename = this.siteData.siteName;

  ngOnInit() {

    const currentUrl = this.router.url;
    if (currentUrl === '') {
      this.isHomePage = true;
    }
  }

  goToHomePage() {
    this.router.navigate(['/home']);
  }

  // log user out
  onLogout() {
    this.authService.logUserOut();
  }


}
