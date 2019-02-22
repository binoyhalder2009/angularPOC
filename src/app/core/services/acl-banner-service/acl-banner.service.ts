import { Injectable } from '@angular/core';
import { ACLImage } from '../../../shared/models/acl-image-data-model/acl-image.model';
import { Content } from '../../../shared/models/acl-image-data-model/acl-image-content.model';
import { AppConfig } from '../app-config/app.config';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AclBannerDataMapperService } from '../../data-mapper/acl-banner-data-mapper/acl-banner-data-mapper.service'
import { ACLBanner } from '../../../shared/models';
import { Observable } from 'rxjs';
import { mockBannerVariantStates } from '../../stubs/acl-banner-variant-state-stub';
import { mockBannerVariants } from '../../stubs/acl-banner-variant-stub';
import { ACLBannerVariant } from '../../../shared/models/acl-banner-data-model/acl-banner-variant.model';
import { ACLBannerState } from '../../../shared/models/acl-banner-data-model/acl-banner-state.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AclBannerService {

  
  private bannerVariants: ACLBannerVariant[];
  private bannerVariantStates: ACLBannerVariant[];

  constructor(private http: HttpClient, private bannerDateMapper: AclBannerDataMapperService) {
  }

  getAclBanners(): ACLBanner[]{
    return this.bannerDateMapper.getBanners();
  }

  getAclMockBanners(): Observable<ACLBanner[]> {
    let banners:ACLBanner[] = this.bannerDateMapper.getBanners();
    return new Observable((observer) => {
      observer.next(banners);
    });
  }

  getBannerVariants(): ACLBannerVariant[]{
    this.bannerVariants = new Array();
    mockBannerVariants.bannerVariantList.forEach(bannerVariantState => { 
      let aclBannerVariant = new ACLBannerVariant();
      aclBannerVariant.variantId = bannerVariantState.variantId;
      aclBannerVariant.variant = bannerVariantState.variant;
      aclBannerVariant.bannerState = new ACLBannerState();

      this.bannerVariants.push(aclBannerVariant);
    });

    return this.bannerVariants;
  }

  getAclMockBannerVariants(): Observable<ACLBannerVariant[]> {
    let bannerVariantStates:ACLBannerVariant[] = this.getBannerVariants();
    return new Observable((observer) => {
      observer.next(bannerVariantStates);
    });
  }


  getBannerStates(): ACLBannerVariant[]{
    this.bannerVariantStates = new Array();
    mockBannerVariantStates.bannerVariantStateList.forEach(bannerVariantState => { 
      let aclBannerVariant = new ACLBannerVariant();
      aclBannerVariant.bannerState = new ACLBannerState();

      aclBannerVariant.variantId = bannerVariantState.variantId;
      aclBannerVariant.variant = bannerVariantState.variant;
      aclBannerVariant.bannerState.stateId = bannerVariantState.stateId;
      aclBannerVariant.bannerState.state = bannerVariantState.state;

      this.bannerVariantStates.push(aclBannerVariant);
    });

    return this.bannerVariantStates;
  }

  getAclMockBannerStates(): Observable<ACLBannerVariant[]> {
    let bannerVariantStates:ACLBannerVariant[] = this.getBannerStates();
    return new Observable((observer) => {
      observer.next(bannerVariantStates);
    });
  }


  getFilteredBannerStates(selectedVariantId): ACLBannerVariant[]{
    this.bannerVariantStates = new Array();
    mockBannerVariantStates.bannerVariantStateList.forEach(bannerVariantState => { 
      if(null!=selectedVariantId && bannerVariantState.variantId===selectedVariantId){
        let aclBannerVariant = new ACLBannerVariant();
        aclBannerVariant.bannerState = new ACLBannerState();
  
        aclBannerVariant.variantId = bannerVariantState.variantId;
        aclBannerVariant.variant = bannerVariantState.variant;
        aclBannerVariant.bannerState.stateId = bannerVariantState.stateId;
        aclBannerVariant.bannerState.state = bannerVariantState.state;
  
        this.bannerVariantStates.push(aclBannerVariant);
      }
    });

    return this.bannerVariantStates;
  }

  getAclMockFilteredBannerStates(selectedVariantId): Observable<ACLBannerVariant[]> {
    let bannerVariantStates:ACLBannerVariant[] = this.getFilteredBannerStates(selectedVariantId);
    return new Observable((observer) => {
      observer.next(bannerVariantStates);
    });
  }

  getAclBanner(selectedVariantId, selectedStateId): Observable<ACLBanner[]> {
    let banners:ACLBanner[] = this.bannerDateMapper.getBanner(selectedVariantId, selectedStateId);
    console.log(banners);
    return new Observable((observer) => {
      observer.next(banners);
    });
  }

}
