import { TestBed } from '@angular/core/testing';

import { EncodedCredentialsFetcherService } from './encoded-credentials-fetcher.service';

describe('EncodedCredentialsFetcherService', () => {
  let service: EncodedCredentialsFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncodedCredentialsFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
