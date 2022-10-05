/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AccessMapComponent } from './access-map.component';

describe('AccessMapComponent', () => {
  let component: AccessMapComponent;
  let fixture: ComponentFixture<AccessMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
