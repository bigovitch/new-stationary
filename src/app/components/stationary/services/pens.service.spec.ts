import { TestBed } from '@angular/core/testing';

import { PensService } from './pens.service';

describe('PensService', () => {
  let service: PensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
