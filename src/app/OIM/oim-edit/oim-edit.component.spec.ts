import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OimEditComponent } from './oim-edit.component';

describe('OimEditComponent', () => {
  let component: OimEditComponent;
  let fixture: ComponentFixture<OimEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OimEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OimEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
