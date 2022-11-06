import { TestBed } from '@angular/core/testing';

import { ProductCategoryApiService } from './product-category-api.service';

describe('ProductCategoryApiService', () => {
  let service: ProductCategoryApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCategoryApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
