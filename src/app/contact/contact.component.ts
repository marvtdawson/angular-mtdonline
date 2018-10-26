import { Component, OnInit } from '@angular/core';
import {SiteDataService} from '../../providers/site-data/site-data.service';
import { UnitedStatesServiceList } from '../../providers/forms/united-states.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  prePageTitle = 'Got A Question?';
  pageTitle = 'Contact Me';
  stateOptions: any;

  constructor(private siteData: SiteDataService) {
    this.stateOptions = UnitedStatesServiceList;
  }

  ngOnInit() {
  }

}
