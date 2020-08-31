import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResolutionCategoryComponent } from './add-resolution-category.component';

describe('AddResolutionCategoryComponent', () => {
  let component: AddResolutionCategoryComponent;
  let fixture: ComponentFixture<AddResolutionCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResolutionCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResolutionCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
