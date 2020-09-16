import { TestBed } from '@angular/core/testing';

import { WakCatalogService } from './wak-catalog.service';

describe('WakCatalogService', () => {
  let service: WakCatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WakCatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
