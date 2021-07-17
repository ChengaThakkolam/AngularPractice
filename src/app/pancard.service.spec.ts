import { TestBed } from '@angular/core/testing';

import { PancardService } from './pancard.service';

describe('PancardService', () => {
  let service: PancardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PancardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
