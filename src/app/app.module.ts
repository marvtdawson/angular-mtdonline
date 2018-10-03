import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule, MatSidenavModule, MatIconModule, MatIconRegistry, MatListModule, MatDialogModule} from '@angular/material';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './layout/app-header/app-header.component';
import { AppFooterComponent } from './layout/app-footer/app-footer.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StacksComponent } from './stacks/stacks.component';
import { ExperienceComponent } from './experience/experience.component';
import { ResumeComponent } from './resume/resume.component';
import { BsNavbarComponent } from './layout/bs-navbar/bs-navbar.component';
import { PhpComponent } from './portfolio/php/php.component';
import { AngularComponent } from './portfolio/angular/angular.component';
import { AngularIonicComponent } from './portfolio/angular-ionic/angular-ionic.component';
import { AngularCAspnetComponent } from './portfolio/angular-c-aspnet/angular-c-aspnet.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactComponent } from './portfolio/react/react.component';
import { WixComponent } from './portfolio/wix/wix.component';
import { SkillsComponent } from './skills/skills.component';
import { RecentProjectsComponent } from './recent-projects/recent-projects.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { AppTitleComponent } from './layout/app-title/app-title.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { CreateProjectComponent } from './projects/create-project/create-project.component';
import { ListProjectComponent } from './projects/list-project/list-project.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    StacksComponent,
    ExperienceComponent,
    ResumeComponent,
    BsNavbarComponent,
    PhpComponent,
    AngularComponent,
    AngularIonicComponent,
    PageNotFoundComponent,
    AngularCAspnetComponent,
    ReactComponent,
    WixComponent,
    SkillsComponent,
    RecentProjectsComponent,
    ConsultingComponent,
    AppTitleComponent,
    LoginComponent,
    ProjectsComponent,
    CreateProjectComponent,
    ListProjectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    ScrollToModule.forRoot()
  ],
  providers: [MatIconRegistry],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [
    RecentProjectsComponent,
    ResumeComponent
  ]
})
export class AppModule { }
