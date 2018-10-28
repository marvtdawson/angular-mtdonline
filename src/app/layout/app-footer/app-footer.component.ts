import { Component, OnInit } from '@angular/core';
import {SiteDataService} from '../../../providers/site-data/site-data.service';
import {MatDialog} from '@angular/material';
import {RequestQuoteComponent} from '../../consulting/request-quote/request-quote.component';
import {ContactComponent} from '../../contact/contact.component';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {

  constructor(private siteData: SiteDataService,
              private dialog: MatDialog) { }

  siteName = this.siteData.siteName;

  ngOnInit() {
  }

  openConsultantRequestForm() {
    this.dialog.open(RequestQuoteComponent, {});
  }

  openContactForm() {
    this.dialog.open(ContactComponent, {});
  }

}
