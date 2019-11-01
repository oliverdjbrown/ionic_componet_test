import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatetimepickerPage } from './datetimepicker.page';

describe('DatetimepickerPage', () => {
  let component: DatetimepickerPage;
  let fixture: ComponentFixture<DatetimepickerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatetimepickerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatetimepickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
