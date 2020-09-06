import { TestBed } from '@angular/core/testing';

import { WknPromoService } from './wkn-promo.service';

describe('WknPromoService', () => {
  let service: WknPromoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WknPromoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
