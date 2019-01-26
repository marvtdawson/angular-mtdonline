import { Component, OnInit } from '@angular/core';


const PROJS = [
  {
    '_id': 1,
    'title': 'DVIDS Hub',
    'frameworks': 'ZF1 & Laravel',
    'imagePath': '../../../assets/img/clients/encompass/dvidshub_2018.jpg',
    'imageAlt': 'Dvids Hub Website',
    'summary': 'Defense Visual Information Distribution Service (DVIDS).',
    'siteUrl': 'goToDvidsHub()'
  },
  {
    '_id': 2,
    'title': 'Burgin Construction MN',
    'frameworks': 'CMS Made Simple',
    'imagePath': '../../../assets/img/clients/burginconstruction/burgin_home_screen.jpg',
    'imageAlt': 'Burgin Construction MN Website',
    'summary': 'Twin Cities general contractor quote application',
    'siteUrl': 'this.goToBurginConstructionMN()'
  },
  {
    '_id': 3,
    'title': 'Mattress & Things',
    'frameworks': 'ACMS Made Simple',
    'imagePath': '../../../assets/img/clients/mattressandthings/homepage_2018.jpg',
    'imageAlt': 'Mattress and Things Website',
    'summary': 'Online Mattress Retailer.',
    'siteUrl': 'goToMattressAndThings'
  },
  {
    '_id': 4,
    'title': 'Get VROM',
    'frameworks': 'CMS Made Simple',
    'imagePath': '../../../assets/img/clients/whoslaundry/wholaundry_homescreen.jpg',
    'imageAlt': 'VROM Website',
    'summary': 'Virtual Office Management Portal.',
    'siteUrl': 'goToVrom'
  },
  {'_id': 5,
    'title': 'Home Grown Musiq',
    'frameworks': 'CMS Made Simple',
    'imagePath': '../../../assets/img/clients/homegrownmusiq/hgm_homepage_2018.jpg',
    'imageAlt': 'HomeGrownMusiq Website',
    'summary': 'Online Independent Hip Hop Community.',
    'siteUrl': 'this.goToHomeGrownMusiq'
  },
  {
    '_id': 6,
    'title': 'The Best Worst Xperience',
    'frameworks': 'CMS Made Simple',
    'imagePath': '../../../assets/img/clients/under_construction_banner.png',
    'imageAlt': 'The Best & Worst Experiences Website',
    'summary': 'User rated shopping / retail experiences app',
    'siteUrl': 'goToTheBestWorstXperience()'
  },
  {
    '_id': 7,
    'title': 'Live Sync',
    'frameworks': 'CMS Made Simple',
    'imagePath': '../../../assets/img/clients/under_construction_banner.png',
    'imageAlt': 'Live Sync Website',
    'summary': 'Marketing Tool',
    'siteUrl': 'goToLiveSync()"'
  },
  {
    '_id': 8,
    'title': 'Live Sync',
    'frameworks': 'PHP & MySQL',
    'imagePath': '../../../assets/img/clients/under_construction_banner.png',
    'imageAlt': 'Live Sync Website',
    'summary': 'Marketing Tool',
    'siteUrl': 'goToLiveSync()"'
  }
];

@Component({
  selector: 'app-php',
  templateUrl: './php.component.html',
  styleUrls: ['./php.component.scss']
})
export class PhpComponent implements OnInit {

  prePageTitle = 'Designed with';
  pageTitle = 'PHP 6 / 7';
  headerImage = '../../assets/img/site/2000px-PHP-logo.svg.png';
  headerImageAlt = 'PHP Header Image';
  projects = PROJS;


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
