import { TestBed } from '@angular/core/testing';

import { OimService } from './oim.service';

describe('OimService', () => {
  let service: OimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
