import { TestBed, inject } from '@angular/core/testing';

import { AclImageService } from './acl-image.service';

describe('UiImageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AclImageService]
    });
  });

  it('should be created', inject([AclImageService], (service: AclImageService) => {
    expect(service).toBeTruthy();
  }));
});
