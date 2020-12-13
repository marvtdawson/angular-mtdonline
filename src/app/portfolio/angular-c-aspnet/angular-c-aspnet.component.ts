import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angualar-c-aspnet',
  templateUrl: './angular-c-aspnet.component.html',
  styleUrls: ['./angular-c-aspnet.component.css']
})
export class AngularCAspnetComponent implements OnInit {

  prePageTitle = 'Designed with';
  pageTitle = 'Angular & C#';

  constructor() { }

  ngOnInit() {
  }

}
