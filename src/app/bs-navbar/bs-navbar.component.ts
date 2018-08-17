import { Component, OnInit } from '@angular/core';
import {SiteDataService} from '../../providers/site-data.service';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  constructor(private siteData: SiteDataService) { }

  sitename = this.siteData.siteName;

  ngOnInit() {
  }

}
