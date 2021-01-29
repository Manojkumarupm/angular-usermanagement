import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OimDetailComponent } from './oim-detail.component';

describe('OimDetailComponent', () => {
  let component: OimDetailComponent;
  let fixture: ComponentFixture<OimDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OimDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OimDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
