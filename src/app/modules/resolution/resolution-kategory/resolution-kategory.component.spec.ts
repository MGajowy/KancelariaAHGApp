import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionKategoryComponent } from './resolution-kategory.component';

describe('ResolutionKategoryComponent', () => {
  let component: ResolutionKategoryComponent;
  let fixture: ComponentFixture<ResolutionKategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolutionKategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolutionKategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
