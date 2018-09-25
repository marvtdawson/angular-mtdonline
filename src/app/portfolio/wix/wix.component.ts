import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wix',
  templateUrl: './wix.component.html',
  // styleUrls: ['./wix.component.css'],
  styles: ['div.healcode div.hc_footer * {display: none !important; }']
})
export class WixComponent implements OnInit {

  pageTitle: 'WIX';

  constructor() { }

  ngOnInit() {
  }

}
