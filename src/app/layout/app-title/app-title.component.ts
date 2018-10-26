import {Component, Injectable, OnInit, Input} from '@angular/core';

@Injectable()
@Component({
  selector: 'app-title',
  templateUrl: './app-title.component.html',
  styleUrls: ['./app-title.component.css']
})
export class AppTitleComponent implements OnInit {

  @Input() prePageTitle: string;
  @Input() pageTitle: string;

 constructor() { }

  ngOnInit() {
  }

}
