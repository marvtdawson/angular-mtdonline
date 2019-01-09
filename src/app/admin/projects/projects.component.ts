import { Component, OnInit } from '@angular/core';
import {SiteDataService} from '../../../providers/site-data/site-data.service';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  pageTitle = 'Projects';
  pageDescription = 'Create a New project or view a List of projects';

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
