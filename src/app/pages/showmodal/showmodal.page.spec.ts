import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmodalPage } from './showmodal.page';

describe('ShowmodalPage', () => {
  let component: ShowmodalPage;
  let fixture: ComponentFixture<ShowmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowmodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
