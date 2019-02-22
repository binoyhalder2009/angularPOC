import { Injectable } from '@angular/core';
import { ACLImage } from '../../../shared/models/acl-image-data-model/acl-image.model';
import { Content } from '../../../shared/models/acl-image-data-model/acl-image-content.model';
import { AppConfig } from '../app-config/app.config';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AclImageDataMapperService } from '../../data-mapper/acl-image-data-mapper/acl-image-data-mapper.service'
import {mockImages} from '../../stubs/acl-image-json-data-stub';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AclImageService {

  constructor(private http: HttpClient, private imageDateMapper: AclImageDataMapperService) {
  }

  getAclImage(): Observable<ACLImage> {   
    return this.http.get<ACLImage>(AppConfig.API_ENDPOINT);
  }

  getAclImages(): ACLImage[]{
    return this.imageDateMapper.getImages();
  }

  getAclMockImage(): Observable<ACLImage> {
    let images:ACLImage[] = this.imageDateMapper.getImages();
    let image = images? images[2] : null;
    return new Observable((observer) => {
      observer.next(image);
    });
  }

  getAclMockImages(): Observable<ACLImage[]> {
    let images:ACLImage[] = this.imageDateMapper.getImages();
    return new Observable((observer) => {
      observer.next(images);
    });
  }

}
