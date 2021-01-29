import { TestBed } from '@angular/core/testing';

import { OimResolver } from './oim-resolver.service';

describe('OimResolverService', () => {
  let service: OimResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OimResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
