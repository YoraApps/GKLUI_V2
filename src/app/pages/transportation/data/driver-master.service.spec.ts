import { TestBed, inject } from '@angular/core/testing';

import { DriverMasterService } from './driver-master.service';

describe('DriverMasterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DriverMasterService],
    });
  });

  it('should be created', inject([DriverMasterService], (service: DriverMasterService) => {
    expect(service).toBeTruthy();
  }));
});
