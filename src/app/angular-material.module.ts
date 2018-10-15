import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatDialogModule,
  MatPaginatorModule,
  MatCardModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatInputModule,
  MatIconRegistry,
  MatSelectModule,
  MatOptionModule
} from '@angular/material';


@NgModule({
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [ MatIconRegistry ],
})
export class AngularMaterialModule {}
