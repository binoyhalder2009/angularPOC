import { TestBed, inject } from '@angular/core/testing';

import { AclBannerService } from './acl-banner.service';

describe('AclBannerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AclBannerService]
    });
  });

  it('should be created', inject([AclBannerService], (service: AclBannerService) => {
    expect(service).toBeTruthy();
  }));
});
