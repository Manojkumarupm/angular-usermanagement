import { TestBed } from '@angular/core/testing';

import { OimEditGuard } from './oim-edit.guard';

describe('OimEditGuard', () => {
  let guard: OimEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OimEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
