import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stacks',
  templateUrl: './stacks.component.html',
  styleUrls: ['./stacks.component.css']
})
export class StacksComponent implements OnInit {

  prePageTitle = 'M.E.A.N & LAMP';
  pageTitle = 'Stacks';

  constructor() { }

  ngOnInit() {
  }

}
