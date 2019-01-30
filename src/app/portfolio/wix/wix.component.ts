import { Component, OnInit } from '@angular/core';

const PROJS = [
  {
    '_id': 1,
    'title': 'Reggie\'s Buckets',
    'frameworks': 'WIX',
    'imagePath': '../../../assets/img/clients/reggiesbucket/reggiesbucket_homescreen.jpg',
    'summary': 'Ex MLB player, Reggie York\'s fitness improvement site.',
    'siteUrl': 'goToReggiesBucket()'
  }
];

@Component({
  selector: 'app-wix',
  templateUrl: './wix.component.html',
  styleUrls: ['./wix.component.scss'],
  // styles: ['div.healcode div.hc_footer * {display: none !important; }']
})
export class WixComponent implements OnInit {

  prePageTitle = 'Designed with';
  pageTitle = 'WIX';
  headerImage = '../../../assets/img/site/zend_2018_php_7.jpg';
  headerImageAlt = 'WIX Header Image';
  projects = PROJS;
  framework = 'WIX';

  constructor() { }

  ngOnInit() {
  }

  goToReggiesBucket() {
    window.location.href = 'https://www.reggiesbucket.com';
  }


}
