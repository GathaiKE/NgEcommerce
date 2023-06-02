import { TestBed } from '@angular/core/testing';

import { CanAccessService } from './can-access.service';

describe('CanAccessService', () => {
  let service: CanAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
