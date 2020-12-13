import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminService } from './admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    /*this.adminService.user$.unsubscribe();*/
  }

}
