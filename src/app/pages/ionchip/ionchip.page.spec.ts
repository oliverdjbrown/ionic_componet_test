import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonchipPage } from './ionchip.page';

describe('IonchipPage', () => {
  let component: IonchipPage;
  let fixture: ComponentFixture<IonchipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonchipPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonchipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
