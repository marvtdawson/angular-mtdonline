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
  MatOptionModule,
} from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';


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
    MatOptionModule,
    MatTooltipModule
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
