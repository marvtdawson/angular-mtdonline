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
  MatSnackBarModule,
  MatExpansionModule,
  MatStepperModule
} from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CdkStepperModule } from '@angular/cdk/stepper';


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
    MatTooltipModule,
    MatSnackBarModule,
    MatExpansionModule,
    CdkStepperModule,
    MatStepperModule
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
