import { TestBed, inject } from '@angular/core/testing';

import { AclImageDataMapperService } from './acl-image-data-mapper.service';

describe('AclImageDataMapperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AclImageDataMapperService]
    });
  });

  it('should be created', inject([AclImageDataMapperService], (service: AclImageDataMapperService) => {
    expect(service).toBeTruthy();
  }));
});
