import { Component, OnInit } from '@angular/core';
import {SiteDataService} from '../../../providers/site-data/site-data.service';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-stacks',
  templateUrl: './stacks.component.html',
  styleUrls: ['./stacks.component.css']
})
export class StacksComponent implements OnInit {

  prePageTitle = 'M.E.A.N & LAMP';
  pageTitle = 'Stacks Up';
  pageDescription = 'Check out the architecture stacks that Marvin has learned';

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
