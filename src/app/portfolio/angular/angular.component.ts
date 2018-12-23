import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {

  prePageTitle = 'Designed with';
  pageTitle = 'Angular 6 / 7';

  constructor() { }

  ngOnInit() {
  }

}
