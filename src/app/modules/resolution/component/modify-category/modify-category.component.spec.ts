import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCategoryComponent } from './modify-category.component';

describe('ModifyCategoryComponent', () => {
  let component: ModifyCategoryComponent;
  let fixture: ComponentFixture<ModifyCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
