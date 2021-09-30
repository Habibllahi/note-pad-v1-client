import { TestBed } from '@angular/core/testing';

import { NotesCachingInterceptorService } from './notes-caching-interceptor.service';

describe('NotesCachingInterceptorService', () => {
  let service: NotesCachingInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesCachingInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
