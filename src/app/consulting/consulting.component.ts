import { Component } from '@angular/core';
import { SiteDataService } from '../../providers/site-data/site-data.service';
import { Meta, Title } from '@angular/platform-browser';
import { TooltipPosition } from '@angular/material';
import { MatDialog } from '@angular/material';
import {RequestQuoteComponent} from './request-quote/request-quote.component';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.css']
})
export class ConsultingComponent {

  prePageTitle = this.siteData.siteName;
  pageTitle = 'Consulting';
  pageDescription = 'Contact Marvin for your project needs';
  siteName = this.siteData.siteName;
  toolTipPositionOptions: TooltipPosition[] =  ['after', 'before', 'above', 'below', 'left', 'right'];
  constructor(private siteData: SiteDataService,
              private metaData: Meta,
              private titleService: Title,
              private matDialog: MatDialog)
  {
    this.titleService.setTitle(this.pageTitle);
    this.metaData.addTags([
      {name: 'description', content: this.pageDescription},
      {name: 'keywords', content: this.siteData.siteKeywords},
      {name: 'author', content: this.siteData.siteName}
    ]);
  }

  openQuoteDialog(): void {
    this.matDialog.open(RequestQuoteComponent)
      .afterClosed()
      .subscribe(result => console.log(result));
  }
}
