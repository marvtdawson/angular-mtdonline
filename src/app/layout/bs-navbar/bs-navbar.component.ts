import { Component, OnInit } from '@angular/core';
import { SiteDataService } from '../../../providers/site-data/site-data.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { AdminService } from '../../admin/admin.service';
import { environment } from '../../../environments/environment';
import * as firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent implements OnInit {

  isHomePage: boolean;
  backgroundColor = environment.navBarBackgroundColor;
  user$: Observable<firebase.User>;

  constructor(private siteData: SiteDataService,
              private dialog: MatDialog,
              private router: Router,
              public adminService: AdminService,
              private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;

  }

  siteName = this.siteData.siteName;

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
    this.adminService.logUserOut();
  }


}
