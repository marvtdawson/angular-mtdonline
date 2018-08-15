import { Component, OnInit } from '@angular/core';
import {SiteDataService} from '../../../providers/site-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {

  constructor(private siteData: SiteDataService) { }

  siteName = this.siteData.siteName;

  ngOnInit() {
  }

}
