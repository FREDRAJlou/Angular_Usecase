import { TestBed } from '@angular/core/testing';

import { ShareableDataService } from './shareable-data.service';

describe('ShareableDataService', () => {
  let service: ShareableDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareableDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
