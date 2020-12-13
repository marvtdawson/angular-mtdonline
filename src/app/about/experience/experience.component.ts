import { Component, OnInit } from '@angular/core';
import {SiteDataService} from '../../../providers/site-data/site-data.service';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  prePageTitle = 'Path to';
  pageTitle = 'Marvin\'s Experiences';
  pageDescription = 'Read up on Marvin\'s past experiences';

  constructor(private siteData: SiteDataService,
              private titleService: Title,
              private metaData: Meta) {
    this.titleService.setTitle(this.pageTitle );
    this.metaData.addTags([
      {name: 'description', content: this.pageDescription},
      {name: 'keywords', content: this.siteData.siteKeywords},
      {name: 'author', content: this.siteData.siteName}
    ]);
  }

  ngOnInit() {
  }

}
