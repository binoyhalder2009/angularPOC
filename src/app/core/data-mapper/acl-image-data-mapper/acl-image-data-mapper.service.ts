import { Injectable } from '@angular/core';
import { ACLImage } from '../../../shared/models/acl-image-data-model/acl-image.model';
import { Content } from '../../../shared/models/acl-image-data-model/acl-image-content.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {mockImages} from '../../../core/stubs/acl-image-json-data-stub';
import { Observable } from 'rxjs';

@Injectable()
export class AclImageDataMapperService{

  private aclImages: ACLImage[];

  constructor(private http: HttpClient) { }

  getImages(): ACLImage[] {
    this.aclImages = new Array();
    mockImages.imageList.forEach(image => {
      let aclImage:ACLImage = new ACLImage();
      aclImage.content = new Content();

      aclImage.id = image.id;
      aclImage.name = image.name;
      aclImage.version = image.version;
      aclImage.variant = image.variant;
      aclImage.state = image.state;
      aclImage.content.src = image.content.src;
      aclImage.content.alt = image.content.alt;
      aclImage.content.class = image.content.class;
      this.aclImages.push(aclImage);
    });
    return this.aclImages;
  }

  getTestAclImage(): Observable<ACLImage> {
    this.aclImages = new Array();
    mockImages.imageList.forEach(image => {
      let aclImage:ACLImage = new ACLImage();
      aclImage.content = new Content();

      aclImage.id = image.id;
      aclImage.name = image.name;
      aclImage.version = image.version;
      aclImage.variant = image.variant;
      aclImage.state = image.state;
      aclImage.content.src = image.content.src;
      aclImage.content.alt = image.content.alt;
      aclImage.content.class = image.content.class;
      this.aclImages.push(aclImage);
    });
    var jSonImage = JSON.stringify(this.aclImages[2]);
    console.log(jSonImage);
    return Observable.create(new ACLImage()).map(jSonImage => JSON.stringify(jSonImage));
    //return this.http.get<ACLImage>(jSonImage);
  }
}
