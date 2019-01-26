import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const PROJS = [
    {
      '_id': 1,
      'title': 'PRETTY PEOPLE PAGES',
      'frameworks': 'Angular 6 & Ionic 4',
      'imagePath': '../../../assets/img/clients/ppp/ppp_homepage.jpg',
      'summary': 'Pretty People Pages Online Adult Dating Site',
      'siteUrl': 'goToPrettyPeoplePages'
    },
    {
      '_id': 2,
      'title': 'Burgin Construction MN',
      'frameworks': 'Angular 6 & Ionic 4',
      'imagePath': '../../../assets/img/clients/burginconstruction/burgin_home_screen.jpg',
      'summary': 'Twin Cities general contractor quote application',
      'siteUrl': 'this.goToBurginConstructionMN()'
    },
    {
      '_id': 3,
      'title': 'Mattress & Things',
      'frameworks': 'Angular 6 & Ionic 4',
      'imagePath': '../../../assets/img/clients/mattressandthings/homepage_2018.jpg',
      'summary': 'Online Mattress Retailer.',
      'siteUrl': 'goToMattressAndThings'
    },
    {
      '_id': 4,
      'title': 'Get VROM',
      'frameworks': 'Angular 6 & Ionic 4',
      'imagePath': '../../../assets/img/clients/whoslaundry/wholaundry_homescreen.jpg',
      'summary': 'Virtual Office Management Portal.',
      'siteUrl': 'goToVrom'
    },
    {'_id': 5,
      'title': 'Home Grown Musiq',
      'frameworks': 'Angular 6 & Ionic 4',
      'imagePath': '../../../assets/img/clients/homegrownmusiq/hgm_homepage_2018.jpg',
      'summary': 'Online Independent Hip Hop Community.',
      'siteUrl': 'this.goToHomeGrownMusiq'
    },
    {
      '_id': 6,
      'title': 'The Best Worst Xperience',
      'frameworks': 'Angular 6 & Ionic 4',
      'imagePath': '../../../assets/img/clients/under_construction_banner.png',
      'summary': 'User rated shopping / retail experiences app',
      'siteUrl': 'goToTheBestWorstXperience()'
    },
    {
      '_id': 7,
      'title': 'Live Sync',
      'frameworks': 'Angular 6 & Ionic 4',
      'imagePath': '../../../assets/img/clients/under_construction_banner.png',
      'summary': 'Marketing Tool',
      'siteUrl': 'goToLiveSync()"'
    }
];

@Component({
  selector: 'app-angular-ionic',
  templateUrl: './angular-ionic.component.html',
  styleUrls: ['./angular-ionic.component.scss']
})

export class AngularIonicComponent implements OnInit {

  prePageTitle = 'Designed with';
  pageTitle = 'Angular & Ionic';
  headerImage = '../../../assets/img/ionic_and_angular.png';
  headerImageAlt = 'Angular & Ionic Header Image';
  projects = PROJS;
  framework = 'Angular & Ionic';

  constructor(private translate: TranslateService) {
    // set default language
    this.translate.setDefaultLang('en');

    this.translate.use('en');

    this.translate.setTranslation('en', {
      ANGULAR_IONIC: 'Angular & Ionic'
    });
  }



  ngOnInit() {
  }

  goToPrettyPeoplePages() { window.location.href = 'https://www.prettypeoplepages'; }

  goToBurginConstructionMN() { window.location.href = 'https://www.burginconstructionmn.com'; }

  goToMattressAndThings() {  window.location.href = 'https://www.mattressandthings.com'; }

  goToVrom() { window.location.href = 'https://www.vrom.com'; }

  goToHomeGrownMusiq() { window.location.href = 'https://www.homegrownmusiq.com'; }

  goToTheBestWorstXperience() { window.location.href = 'https://www.thebestworst.com'; }

  goToLiveSync() { window.location.href = 'https://www.livesync.com'; }

}
