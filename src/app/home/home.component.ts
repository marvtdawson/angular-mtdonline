import {Component, Injector, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {createCustomElement} from '@angular/elements';

import { RecentProjectsComponent } from '../recent-projects/recent-projects.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content = null;

  constructor(public router: Router,
              public injector: Injector) {
    const RecentProjectsElement = createCustomElement(RecentProjectsComponent, {injector: injector});
    customElements.define('recent-projects', RecentProjectsElement);
    setTimeout(() => {
      this.content = '<recent-projects></recent-projects>';
    }, 1000);
  }

  ngOnInit() {
  }

  goToMtdOnline() {
    window.location.href = 'https://mtdonline.net';
  }

  goToReggiesBucket() {
    window.location.href = 'https://www.reggiesbucket.com/home';
  }

}
