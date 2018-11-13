import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitCustomerComponent } from './submit-customer.component';

describe('SubmitCustomerComponent', () => {
  let component: SubmitCustomerComponent;
  let fixture: ComponentFixture<SubmitCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
