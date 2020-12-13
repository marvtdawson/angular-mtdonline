import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login.component';
import { AngularMaterialModule } from '../../angular-material.module';
import { FormsModule } from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ FormsModule, AngularMaterialModule, HttpClientModule ],
      providers: [ HttpClientModule, AngularFirestore ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Login Component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain onSignUpWithGoogle method', () => {
    // arrange

    // act
    component.onSignUpWithGoogle();

    // assert
    expect(component.onSignUpWithGoogle()).toBeTruthy();
  });
});
