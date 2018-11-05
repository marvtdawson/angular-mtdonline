import { Component, OnInit } from '@angular/core';
import { MTD_ONLINE } from '../../../../config/lib/global-const';
import {ExternalRoutesService} from '../../../providers/external-routes/external-routes.service';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {

  prePageTitle = 'Designed with';
  pageTitle = 'React';
  extRoute: any;

  constructor(private externalRoute: ExternalRoutesService) {
    this.extRoute = MTD_ONLINE;
  }

  ngOnInit() {
  }
  mtdOnline() {
    this.externalRoute.goToMtdOnline();
  }

}
