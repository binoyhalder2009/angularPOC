import { Component, OnInit } from '@angular/core';
import { AclImageService } from '../../core/services/acl-image-service/acl-image.service';
import { ACLImage } from '../../shared/models/acl-image-data-model/acl-image.model';
import { AppConfig } from '../../core/services/app-config/app.config';
import {AclImageDataMapperService} from '../../core/data-mapper/acl-image-data-mapper/acl-image-data-mapper.service';
import {mockImages} from '../../core/stubs/acl-image-json-data-stub';

@Component({
  selector: 'aclimage-page',
  templateUrl: './aclimage.page.html',
  styleUrls: ['./aclimage.page.css']
})
export class AclImagePage implements OnInit {

  title:String;
  aclImage:ACLImage;
  aclImages:ACLImage[];

  constructor(private aclImageService:AclImageService, private aclImageDataMapper:AclImageDataMapperService) {}

  ngOnInit() {
    this.title=AppConfig.ACL_IMAGE;
 
    // For single image data from list of image data
    this.aclImageService.getAclMockImage().subscribe(image => this.aclImage = image);

    //For list of images data
    this.aclImageService.getAclMockImages().subscribe(images => this.aclImages = images);
    
  }
}
