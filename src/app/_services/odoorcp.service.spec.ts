import { TestBed } from '@angular/core/testing';

import { OdoorcpService } from './odoorcp.service';

describe('OdoorcpService', () => {
  let service: OdoorcpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OdoorcpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
