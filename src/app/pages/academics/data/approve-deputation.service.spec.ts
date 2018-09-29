import { TestBed, inject } from '@angular/core/testing';

import { ApproveDeputationService } from './approve-deputation.service';

describe('ApproveDeputationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApproveDeputationService]
    });
  });

  it('should be created', inject([ApproveDeputationService], (service: ApproveDeputationService) => {
    expect(service).toBeTruthy();
  }));
});
