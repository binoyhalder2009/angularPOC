import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app.component';
import { ACLImageComponent } from './shared/components/acl-image/acl-image.component';
import { ACLBannerComponent } from './shared/components/acl-banner/acl-banner.component';

import { AclImageService } from './core/services/acl-image-service/acl-image.service';
import { AclBannerService } from './core/services/acl-banner-service/acl-banner.service';
import { AclImageDataMapperService } from './core/data-mapper/acl-image-data-mapper/acl-image-data-mapper.service';
import { AclBannerDataMapperService } from './core/data-mapper/acl-banner-data-mapper/acl-banner-data-mapper.service';

import { LandingPage } from './pages/landing/landing.page';
import { AclBannerPage } from './pages/aclbanner/aclbanner.page';
import { AclImagePage } from './pages/aclimage/aclImage.page'

const appRoutes: Routes = [
  {
    path: '',
    component: LandingPage
  },
  {
    path: 'acl-image',
    component: ACLImageComponent
  },
  {
    path: 'acl-banner',
    component: ACLBannerComponent
  },
  {
    path: 'aclimage-page',
    component: AclImagePage
  },
  {
    path: 'aclbanner-page',
    component: AclBannerPage
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ACLImageComponent,
    ACLBannerComponent,
    AclImagePage,
    AclBannerPage,
    LandingPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AclImageService, AclBannerService, AclImageDataMapperService, AclBannerDataMapperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
