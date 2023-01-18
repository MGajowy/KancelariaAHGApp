/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddReputataionComponent } from './add-reputataion.component';

describe('AddReputataionComponent', () => {
  let component: AddReputataionComponent;
  let fixture: ComponentFixture<AddReputataionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReputataionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReputataionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
