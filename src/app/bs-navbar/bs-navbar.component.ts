import { Component, OnInit } from '@angular/core';
import {SiteDataService} from '../../providers/site-data.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ResumeComponent} from '../resume/resume.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  isHomePage: boolean;

  constructor(private siteData: SiteDataService,
              private dialog: MatDialog,
              private router: Router) { }

  sitename = this.siteData.siteName;

  ngOnInit() {

    const currentUrl = this.router.url;
    console.log(currentUrl);

    if (currentUrl === '') {
      this.isHomePage = true;
    }
  }

  goToHomePage() {
  }

  openResumeDialog(): void {
    const dialogRef = this.dialog.open(ResumeComponent, {
        // data: {name: this.name, animal: this.animal}
      });

    /*dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });*/
  }

}
