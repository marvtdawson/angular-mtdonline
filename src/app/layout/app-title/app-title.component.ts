import {Component, Injectable, OnInit, Output} from '@angular/core';

@Injectable()
@Component({
  selector: 'app-title',
  templateUrl: './app-title.component.html',
  styleUrls: ['./app-title.component.css']
})
export class AppTitleComponent implements OnInit {

  @Output() pageTitle: string;

 constructor() { }

  ngOnInit() {
  }

}
