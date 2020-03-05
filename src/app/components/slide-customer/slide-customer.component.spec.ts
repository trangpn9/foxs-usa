import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCustomerComponent } from './slide-customer.component';

describe('SlideCustomerComponent', () => {
  let component: SlideCustomerComponent;
  let fixture: ComponentFixture<SlideCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
