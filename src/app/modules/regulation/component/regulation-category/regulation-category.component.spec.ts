import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulationCategoryComponent } from './regulation-category.component';

describe('RegulationCategoryComponent', () => {
  let component: RegulationCategoryComponent;
  let fixture: ComponentFixture<RegulationCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegulationCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulationCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
