import { TestBed, inject } from '@angular/core/testing';

import { ManagepaymentService } from './managepayment.service';

describe('ManagepaymentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManagepaymentService],
    });
  });

  it('should be created', inject([ManagepaymentService], (service: ManagepaymentService) => {
    expect(service).toBeTruthy();
  }));
});
