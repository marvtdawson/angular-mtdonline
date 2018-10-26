import { Component, OnInit } from '@angular/core';
import { globalConst } from '../../../../config/lib/global-const';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {

  prePageTitle = 'Designed with';
  pageTitle = 'React 16';

  constructor() { }

  ngOnInit() {
  }

}
