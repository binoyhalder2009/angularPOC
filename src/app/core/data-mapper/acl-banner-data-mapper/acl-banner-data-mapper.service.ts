import { Injectable } from '@angular/core';
import { ACLBanner } from '../../../shared/models/acl-banner-data-model/acl-banner.model';
import { ACLImage } from '../../../shared/models/acl-image-data-model/acl-image.model';
import { Content } from '../../../shared/models/acl-image-data-model/acl-image-content.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {mockBanners} from '../../../core/stubs/acl-banner-json-data-stub';
import { Observable } from 'rxjs';

@Injectable()
export class AclBannerDataMapperService {

  private aclBanners: ACLBanner[];

  constructor(private http: HttpClient) { }

  getBanners(): ACLBanner[] {
    this.aclBanners = new Array();
    mockBanners.bannerList.forEach(banner => {
      let aclBanner:ACLBanner = new ACLBanner();
      aclBanner.image = new ACLImage();
      aclBanner.image.content = new Content();

      aclBanner.typeId = banner.stateId;
      aclBanner.name = banner.name;
      aclBanner.version = banner.version;
      aclBanner.variantId = banner.variantId;
      aclBanner.variant = banner.variant;
      aclBanner.stateId = banner.stateId;
      aclBanner.state = banner.state;

      aclBanner.image.id = banner.image.id;
      aclBanner.image.name = banner.image.name;
      aclBanner.image.version = banner.image.version;
      aclBanner.image.variant = banner.image.variant;
      aclBanner.image.state = banner.image.state;

      aclBanner.image.content.src = banner.image.content.src;
      aclBanner.image.content.class = banner.image.content.class;
      aclBanner.image.content.alt = banner.image.content.alt;

      this.aclBanners.push(aclBanner);
    });
    console.log(this.aclBanners);
    return this.aclBanners;
  }

  getBanner(selectedVariantId, selectedStateId): ACLBanner[] {
    this.aclBanners = new Array();
    mockBanners.bannerList.forEach(banner => {
      if(null!=selectedVariantId && null!=selectedStateId){
        if(banner.variantId === selectedVariantId && banner.stateId === selectedStateId){
          let aclBanner:ACLBanner = new ACLBanner();
          aclBanner.image = new ACLImage();
          aclBanner.image.content = new Content();
    
          aclBanner.typeId = banner.stateId;
          aclBanner.name = banner.name;
          aclBanner.version = banner.version;
          aclBanner.variantId = banner.variantId;
          aclBanner.variant = banner.variant;
          aclBanner.stateId = banner.stateId;
          aclBanner.state = banner.state;
    
          aclBanner.image.id = banner.image.id;
          aclBanner.image.name = banner.image.name;
          aclBanner.image.version = banner.image.version;
          aclBanner.image.variant = banner.image.variant;
          aclBanner.image.state = banner.image.state;
    
          aclBanner.image.content.src = banner.image.content.src;
          aclBanner.image.content.class = banner.image.content.class;
          aclBanner.image.content.alt = banner.image.content.alt;
    
          this.aclBanners.push(aclBanner);
        }
      }

    });
    return this.aclBanners;
  }
}
