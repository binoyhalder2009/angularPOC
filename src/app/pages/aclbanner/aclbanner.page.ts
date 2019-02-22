import { Component, OnInit } from '@angular/core';
import { AclBannerService } from '../../core/services/acl-banner-service/acl-banner.service';
import { AppConfig } from '../../core/services/app-config/app.config';
import { ACLBanner } from '../../shared/models';
import { ACLBannerVariant } from '../../shared/models/acl-banner-data-model/acl-banner-variant.model';

@Component({
  selector: 'aclbanner-page',
  templateUrl: './aclbanner.page.html',
  styleUrls: ['./aclbanner.page.css']
})
export class AclBannerPage implements OnInit {

  title:String;
  aclBanners:ACLBanner[];
  aclBannerVariants:ACLBannerVariant[];
  aclBannerStates:ACLBannerVariant[];

  selectedVariantId:String;
  selectedStateId:String;

  constructor(private aclBannerService:AclBannerService) {}

  ngOnInit() {
    this.title=AppConfig.ACL_BANNER;
    //For list of images data
    //this.aclBanners = this.aclBannerService.getAclBanners();

    //For list of images data
    this.aclBannerService.getAclMockBanners().subscribe(banners => this.aclBanners = banners);
    //this.aclBannerService.getAclBanner(this.selectedVariantId, this.selectedStateId).subscribe(banners => this.aclBanners = banners);

    this.aclBannerService.getAclMockBannerVariants().subscribe(bannerVeriant => this.aclBannerVariants = bannerVeriant);
  }

  getStatesForSelectedVariant(selectedVariant): void{
    this.selectedVariantId = selectedVariant;
    this.aclBannerService.getAclMockFilteredBannerStates(this.selectedVariantId).subscribe(bannerState => this.aclBannerStates = bannerState);
  }

  getActiveVariantState(selectedState): void{
    this.selectedStateId = selectedState
    alert("Selected VariantId: "+this.selectedVariantId);
    alert("Selected StateId: "+this.selectedStateId);
    this.aclBannerService.getAclBanner(this.selectedVariantId, this.selectedStateId).subscribe(banners => this.aclBanners = banners);
    alert(this.aclBanners);
  }


}
