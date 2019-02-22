import { TestBed, inject } from '@angular/core/testing';

import { AclBannerDataMapperService } from './acl-banner-data-mapper.service';

describe('AclBannerDataMapperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AclBannerDataMapperService]
    });
  });

  it('should be created', inject([AclBannerDataMapperService], (service: AclBannerDataMapperService) => {
    expect(service).toBeTruthy();
  }));
});
