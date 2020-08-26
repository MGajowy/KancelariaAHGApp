import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulationListComponent } from './regulation-list.component';

describe('RegulationListComponent', () => {
  let component: RegulationListComponent;
  let fixture: ComponentFixture<RegulationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegulationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
