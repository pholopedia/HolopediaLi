import { TestBed } from '@angular/core/testing';

import { HologramsService } from './holograms.service';

describe('HologramsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HologramsService = TestBed.get(HologramsService);
    expect(service).toBeTruthy();
  });
});
