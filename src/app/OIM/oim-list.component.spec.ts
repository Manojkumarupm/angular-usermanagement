import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OimListComponent } from './oim-list.component';

describe('OimListComponent', () => {
  let component: OimListComponent;
  let fixture: ComponentFixture<OimListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OimListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OimListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
