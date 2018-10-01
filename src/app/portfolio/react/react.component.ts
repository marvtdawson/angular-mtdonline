import { Component, OnInit } from '@angular/core';
import { globalConst } from '../../../../config/lib/global-const';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {

  pageTitle: 'React Project';

  constructor() { }

  ngOnInit() {
  }

}
