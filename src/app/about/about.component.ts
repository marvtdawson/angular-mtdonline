import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {SiteDataService} from '../../providers/site-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  pageTitle = 'Marvin The Quiet Anomally!';
  pageDescrition = 'Learn all about Marvin Dawson\'s story and his journey to become a Full Stack Software Engineer. ' +
    'In addition read about his adaption of Angular 6 and the Ionic Framework';

  constructor(private titleService: Title,
              private meta: Meta,
              private siteData: SiteDataService) {
    this.titleService.setTitle(this.pageTitle);
    this.meta.addTags([
      {name: 'description', content: this.pageDescrition},
      {name: 'keywords', content: this.siteData.siteKeywords},
      {name: 'author', content: this.siteData.siteName}
      ]);
  }

  ngOnInit() {}

}
