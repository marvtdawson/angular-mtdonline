import { Component } from '@angular/core';
import { SiteDataService } from '../../providers/site-data/site-data.service';

@Component({
  selector: 'app-about-site',
  templateUrl: './about-site.component.html',
  styleUrls: ['./about-site.component.scss']
})

export class AboutSiteComponent {
  siteName = this.siteData.siteName;
  siteMotto = this.siteData.siteMotto;
  constructor( private siteData: SiteDataService ) {}
}
