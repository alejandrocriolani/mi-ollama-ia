import { TestBed } from '@angular/core/testing';

import { LlamaHandleResponseService } from './llama-handle-response.service';

describe('LlamaHandleResponseService', () => {
  let service: LlamaHandleResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LlamaHandleResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
