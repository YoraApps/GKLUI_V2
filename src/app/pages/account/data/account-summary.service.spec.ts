import { TestBed, inject } from '@angular/core/testing';

import { AccountSummaryService } from './account-summary.service';

describe('AccountSummaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountSummaryService],
    });
  });

  it('should be created', inject([AccountSummaryService], (service: AccountSummaryService) => {
    expect(service).toBeTruthy();
  }));
});
