import { TestBed } from '@angular/core/testing';

import { Ecomm } from './ecomm';

describe('Ecomm', () => {
  let service: Ecomm;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ecomm);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
