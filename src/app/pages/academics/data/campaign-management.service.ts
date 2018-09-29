import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CampaignManagementService {

  constructor() { }
  data = [{
    CampaignId: 1,
    CampaignName: 'sdasdasd',
    CityName: 'Bhubaneswar',
    FromDate: '	1-2-2019',
    ToDate: '2-2-2013',
    Status: 'Not Aprroved',
  }, {
    CampaignId: 2,
    CampaignName: 'sdasdasd',
    CityName: 'Bhubaneswar',
    FromDate: '	1-2-2019',
    ToDate: '2-2-2013',
    Status: 'Aprroved',
  }];
  data1 = [{
    CampaignId: 1,
    CampaignName: 'sdasdasd',
    CityName: 'Bhubaneswar',
    FromDate: '	1-2-2019',
    ToDate: '2-2-2013',
    Status: 'Aprroved',
  }, {
    CampaignId: 2,
    CampaignName: 'sdasdasd',
    CityName: 'Bhubaneswar',
    FromDate: '	1-2-2019',
    ToDate: '2-2-2013',
    Status: 'Aprroved',
  }];

  getData() {
    return this.data;
  }
  getAproveData() {
    return this.data1;
  }
}
