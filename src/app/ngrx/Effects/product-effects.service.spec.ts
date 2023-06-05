import { TestBed } from '@angular/core/testing';

import { ProductEffectsService } from './product-effects.service';

describe('ProductEffectsService', () => {
  let service: ProductEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
