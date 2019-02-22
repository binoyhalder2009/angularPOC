import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'acl-banner',
  templateUrl: './acl-banner.component.html',
  styleUrls: ['./acl-banner.component.css']
})
export class ACLBannerComponent implements OnInit {

  @Input() aclBannerUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
