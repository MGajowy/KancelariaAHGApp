import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionsListComponent } from './resolutions-list.component';

describe('ResolutionsListComponent', () => {
  let component: ResolutionsListComponent;
  let fixture: ComponentFixture<ResolutionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolutionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolutionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
