import { TestBed, inject } from '@angular/core/testing';

import { RoutecreationService } from './routecreation.service';

describe('RoutecreationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutecreationService],
    });
  });

  it('should be created', inject([RoutecreationService], (service: RoutecreationService) => {
    expect(service).toBeTruthy();
  }));
});
