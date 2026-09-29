import { TestBed } from '@angular/core/testing';

import { NewspaperLocalService } from './newspaper-local-service';

describe('NewspaperLocalService', () => {
  let service: NewspaperLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewspaperLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
