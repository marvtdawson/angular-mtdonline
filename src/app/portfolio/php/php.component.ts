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
  headerImage = '../../assets/img/site/2000px-PHP-logo.svg.png';


  constructor() { }

  ngOnInit() {
  }

 goToDvidsHub() {
    window.location.href = 'https://www.dvidshub.net';
  }

  goToBouldenCompany() {
    window.location.href = 'https://www.bouldencompany.com';
  }

  goToCCS() {
    window.location.href = 'https://www.bouldencompany.com';
  }

  goToAeroMetals() {
    window.location.href = 'https://www.bouldencompany.com';
  }

  goToQualityAirServices() {
    window.location.href = 'https://www.bouldencompany.com';
  }

  goToLeecynCompany() {
    window.location.href = 'https://www.bouldencompany.com';
  }

  goToGTD() {
    window.location.href = 'https://www.gtd.com';
  }

}
