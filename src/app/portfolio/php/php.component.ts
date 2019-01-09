import { Component, OnInit } from '@angular/core';
// import {Routes} from '@angular/router';
// import {Routes} from '@angular/router';

@Component({
  selector: 'app-php',
  templateUrl: './php.component.html',
  styleUrls: ['./php.component.scss']
})
export class PhpComponent implements OnInit {

  prePageTitle = 'Designed with';
  pageTitle = 'PHP 6 / 7';


  constructor() { }

  ngOnInit() {
  }

 goToDvidsHub() {
    window.location.href = 'https://www.dvidshub.net';
  }

  goToGTD() {
    window.location.href = 'https://www.gtd.com';
  }

}
