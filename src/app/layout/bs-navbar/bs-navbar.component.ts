import { Component, OnInit } from '@angular/core';
import { SiteDataService } from '../../../providers/site-data/site-data.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { AdminService } from '../../admin/admin.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  isHomePage: boolean;
  backgroundColor = environment.navBarBackgroundColor;

  constructor(private siteData: SiteDataService,
              private dialog: MatDialog,
              private router: Router,
              public adminService: AdminService) {

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
    this.adminService.logUserOut();
  }


}
