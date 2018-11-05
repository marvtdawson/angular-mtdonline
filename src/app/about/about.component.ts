import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SiteDataService } from '../../providers/site-data/site-data.service';
import { AppTitleComponent } from '../layout/app-title/app-title.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  prePageTitle = 'About Marvo';
  pageTitle = 'The Quiet Anomally!';

  pageDescription = 'Learn all about Marvin Dawson\'s story and his journey to become a Full Stack Software Engineer. ' +
    'In addition read about his adaption of Angular 6 and the Ionic Framework';

  constructor(private titleService: Title,
              private metaData: Meta,
              private siteData: SiteDataService) {
    this.titleService.setTitle(this.pageTitle );
    this.metaData.addTags([
      {name: 'description', content: this.pageDescription},
      {name: 'keywords', content: this.siteData.siteKeywords},
      {name: 'author', content: this.siteData.siteName}
      ]);
  }

  ngOnInit() {}

}
