import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AclBannerComponent } from './acl-banner.component';

describe('AclBannerComponent', () => {
  let component: AclBannerComponent;
  let fixture: ComponentFixture<AclBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AclBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AclBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
