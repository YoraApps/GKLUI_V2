import { TestBed, inject } from '@angular/core/testing';

import { AssignRouteService } from './assign-route.service';

describe('AssignRouteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssignRouteService]
    });
  });

  it('should be created', inject([AssignRouteService], (service: AssignRouteService) => {
    expect(service).toBeTruthy();
  }));
});
