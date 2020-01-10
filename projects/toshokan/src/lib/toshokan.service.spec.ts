import { TestBed } from '@angular/core/testing';

import { ToshokanService } from './toshokan.service';

describe('ToshokanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToshokanService = TestBed.get(ToshokanService);
    expect(service).toBeTruthy();
  });
});
