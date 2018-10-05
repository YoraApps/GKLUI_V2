import { TestBed, inject } from '@angular/core/testing';

import { FeeCategoryService } from './fee-category.service';

describe('FeeCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeeCategoryService]
    });
  });

  it('should be created', inject([FeeCategoryService], (service: FeeCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
