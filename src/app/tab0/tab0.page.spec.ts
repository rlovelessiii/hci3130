import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab0Page } from './tab0.page';

describe('Tab0Page', () => {
  let component: Tab0Page;
  let fixture: ComponentFixture<Tab0Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab0Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab0Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
