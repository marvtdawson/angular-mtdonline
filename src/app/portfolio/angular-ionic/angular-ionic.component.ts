import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
    })
  }

  ngOnInit() {
  }

}
