import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OimEditInfoComponent } from './oim-edit-info.component';

describe('OimEditInfoComponent', () => {
  let component: OimEditInfoComponent;
  let fixture: ComponentFixture<OimEditInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OimEditInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OimEditInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
