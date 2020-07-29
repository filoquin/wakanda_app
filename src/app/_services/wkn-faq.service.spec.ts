import { TestBed } from '@angular/core/testing';

import { WknFaqService } from './wkn-faq.service';

describe('WknFaqService', () => {
  let service: WknFaqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WknFaqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
