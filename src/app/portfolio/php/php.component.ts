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
    'title': 'BOULDEN COMPANY',
    'frameworks': 'CMS Made Simple',
    'imagePath': '../../../assets/img/clients/ecw/boulden_company/homePg_after_2018.jpg',
    'imageAlt': 'Burgin Construction MN Website',
    'summary': 'Experienced in app deployment for Android to the Google Play App Store.',
    'siteUrl': 'this.goToBouldenCompany()'
  },
  {
    '_id': 3,
    'title': 'CONDENSOR & CHILLER',
    'frameworks': 'CMS Made Simple',
    'imagePath': '../../../assets/img/clients/ecw/condenser_chiller/homePg_after.JPG',
    'imageAlt': 'Mattress and Things Website',
    'summary': 'Experienced in app deployment for Android to the Google Play App Store.',
    'siteUrl': 'goToCCS()'
  },
  {
    '_id': 4,
    'title': 'AERO METALS',
    'frameworks': 'CMS Made Simple',
    'imagePath': '../../../assets/img/clients/ecw/aero_metals/homePg_after.JPG',
    'imageAlt': 'AERO Website',
    'summary': 'Experienced in app deployment for Android to the Google Play App Store.',
    'siteUrl': 'goToVrom'
  },
  {'_id': 5,
    'title': 'QUALITY AIR SERVICES',
    'frameworks': 'CMS Made Simple',
    'imagePath': '../../../assets/img/clients/ecw/qas/qas_homepage.jpg',
    'imageAlt': 'Quality Air Services Website',
    'summary': 'Experienced in app deployment for Android to the Google Play App Store.',
    'siteUrl': 'this.goToQualityAirServices()'
  },
  {
    '_id': 6,
    'title': 'LEECYN COMPANY',
    'frameworks': 'CMS Made Simple',
    'imagePath': '../../../assets/img/clients/ecw/leecyn/leecyn_homepage_2018.jpg',
    'imageAlt': 'Leecyn Company Website',
    'summary': 'Experienced in app deployment for Android to the Google Play App Store.',
    'siteUrl': 'goToLeecynCompany()'
  },
  {
    '_id': 7,
    'title': 'GREENVILLE TOOL',
    'frameworks': 'CMS Made Simple',
    'imagePath': '../../../assets/img/clients/ecw/greenville_tool/homePg_after.JPG',
    'imageAlt': 'Greenville Tool Website',
    'summary': 'Experienced in app deployment for Android to the Google Play App Store.',
    'siteUrl': 'goToGTD()'
  },
  {
    '_id': 8,
    'title': 'Cummin\'s M.a.S.F Portal',
    'frameworks': 'PHP & MySQL',
    'imagePath': '.../../../assets/img/clients/cummins/Cummins1.jpg',
    'imageAlt': 'M.a.S.F Portal Application',
    'summary': 'Part Ordering Demo Application',
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
