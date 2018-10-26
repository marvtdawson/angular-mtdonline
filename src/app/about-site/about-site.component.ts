import { Component } from '@angular/core';
import {SiteDataService} from '../../providers/site-data/site-data.service';

@Component({
  selector: 'app-about-site',
  templateUrl: '/about-site.component.html',
  styleUrls: ['/about-site.component.css']
})
export class AboutSiteComponent {
  siteName = this.siteData.siteName;
  constructor(private siteData: SiteDataService ) {}

}
