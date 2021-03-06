import {Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {createCustomElement} from '@angular/elements';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

import { RecentProjectsComponent } from '../recent-projects/recent-projects.component';
import { ResumeComponent } from '../resume/resume.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { SiteDataService } from '../../providers/site-data/site-data.service';
import {AboutSiteComponent} from '../about-site/about-site.component';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {ProjectsInterface} from '../admin/projects/projects-interface';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  content = null;
  siteName = this.siteData.siteName;

  projectsCollection: AngularFirestoreCollection<ProjectsInterface>;
  projects$: Observable<ProjectsInterface[]>;

  constructor(public router: Router,
              public injector: Injector,
              private dialog: MatDialog,
              private _scrollToService: ScrollToService,
              private siteData: SiteDataService,
              private afStore: AngularFirestore) {
    const RecentProjectsElement = createCustomElement(RecentProjectsComponent, {injector: injector});
    customElements.define('recent-projects', RecentProjectsElement);
    setTimeout(() => {
      this.content = '<recent-projects></recent-projects>';
    }, 5000);
  }

  ngOnInit() {
    // this.projects$ = this.projectService.getProjects();
    // this.projects$ = this.projectService.getAllProjects();

    this.projectsCollection = this.afStore.collection('projects', ref => ref.limit(3));
    this.projects$ = this.projectsCollection.valueChanges();
  }

  triggerScrollTo() {
    const config: ScrollToConfigOptions = {
      target: 'about-me',
      duration: 3000
    };
    this._scrollToService.scrollTo(config);
  }

  goToBurginConstruction() {
    window.location.href = 'https://www.burginconstructionmn.com';
  }

  goToWhosLaundry() {
    window.location.href = 'https://www.whoslaundry.com';
  }
  goToMattressAndThings() {
    window.location.href = 'https://www.mattressandthings.com';
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

  openAboutThisSite() {
    this.dialog.open(AboutSiteComponent, {});
  }

  myTestedFunction() {
    return 'My Tested Function';
  }

}
