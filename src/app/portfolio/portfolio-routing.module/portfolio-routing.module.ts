import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {PortfolioComponent} from '../portfolio.component';
import {AngularComponent} from '../angular/angular.component';
import {AngularIonicComponent} from '../angular-ionic/angular-ionic.component';
import {AngularCAspnetComponent} from '../angular-c-aspnet/angular-c-aspnet.component';
import {ReactComponent} from '../react/react.component';
import {PhpComponent} from '../php/php.component';
import {WixComponent} from '../wix/wix.component';
import {JavaComponent} from '../java/java.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'portfolio', component: PortfolioComponent,
        children: [
          { path: 'angular', component: AngularComponent},
          { path: 'angular-c-aspnet', component: AngularCAspnetComponent},
          { path: 'angular-ionic', component: AngularIonicComponent},
          { path: 'php', component: PhpComponent},
          { path: 'react', component: ReactComponent},
          { path: 'wix', component: WixComponent},
          { path: 'java', component: JavaComponent}
        ]
      },
    ])
  ],
  declarations: []
})
export class PortfolioRoutingModule { }
