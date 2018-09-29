import { TestBed, inject } from '@angular/core/testing';

import { CampaignManagementService } from './campaign-management.service';

describe('CampaignManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampaignManagementService],
    });
  });

  it('should be created', inject([CampaignManagementService], (service: CampaignManagementService) => {
    expect(service).toBeTruthy();
  }));
});
