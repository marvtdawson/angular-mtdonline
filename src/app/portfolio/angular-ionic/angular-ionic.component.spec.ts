import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularIonicComponent } from './angular-ionic.component';

describe('AngularIonicComponent', () => {
  let component: AngularIonicComponent;
  let fixture: ComponentFixture<AngularIonicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularIonicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularIonicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
