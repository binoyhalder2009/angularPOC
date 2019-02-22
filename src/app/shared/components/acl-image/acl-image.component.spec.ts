import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACLImageComponent } from './acl-image.component';

describe('UiImageComponent', () => {
  let component: ACLImageComponent;
  let fixture: ComponentFixture<ACLImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACLImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACLImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
