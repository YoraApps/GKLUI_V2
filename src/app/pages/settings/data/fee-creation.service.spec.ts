import { TestBed, inject } from '@angular/core/testing';

import { FeeCreationService } from './fee-creation.service';

describe('FeeCreationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeeCreationService]
    });
  });

  it('should be created', inject([FeeCreationService], (service: FeeCreationService) => {
    expect(service).toBeTruthy();
  }));
});
