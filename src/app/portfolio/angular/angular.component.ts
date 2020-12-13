import { Component, OnInit } from '@angular/core';

const PROJS = [
  {
    '_id': 1,
    'title': 'PRICE DAWSON REUNION',
    'frameworks': 'Angular 6 / 7',
    'imagePath': '../../../assets/img/clients/pricedawson/pricedawson_homepage.jpg',
    'summary': 'The Redesign of the Price Dawson Family Reunion Site.',
    'siteUrl': 'goToPriceDawson()'
  },
  {
    '_id': 2,
    'title': 'I\'M A LAME BETA',
    'frameworks': 'Angular 6 / 7',
    'imagePath': '../../../assets/img/clients/under_construction_banner.png',
    'summary': 'Self Awareness & Leadership',
    'siteUrl': ''
  },
  {
    '_id': 3,
    'title': 'MARVIN T DAWSON',
    'frameworks': 'Angular 6 / 7',
    'imagePath': '.../../../assets/img/clients/under_construction_banner.png',
    'summary': 'Hey you\'re here already!',
    'siteUrl': ''
  }
];

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {

  prePageTitle = 'Designed with';
  pageTitle = 'Angular 6 / 7';
  headerImage = '../../../assets/img/site/designed_with_angular_web_banner.jpg';
  headerImageAlt = 'Angular & Ionic Header Image';
  projects = PROJS;
  framework = 'Angular & Ionic';

  constructor() { }

  ngOnInit() {
  }

  goToPriceDawson() {
    window.location.href = 'https://www.pricedawson.org';
  }

}
