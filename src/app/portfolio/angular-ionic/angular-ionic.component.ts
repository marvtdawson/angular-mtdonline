import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const projects = [
  {'title': 'string'}
];

@Component({
  selector: 'app-angular-ionic',
  templateUrl: './angular-ionic.component.html',
  styleUrls: ['./angular-ionic.component.scss']
})

export class AngularIonicComponent implements OnInit {

  prePageTitle = 'Designed with';
  pageTitle = 'Angular & Ionic';

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
