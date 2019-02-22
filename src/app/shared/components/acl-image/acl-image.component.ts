import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'acl-image',
  templateUrl: './acl-image.component.html',
  styleUrls: ['./acl-image.component.css']
})
export class ACLImageComponent implements OnInit {

  @Input() aclImageUrl: string;

  constructor() { }

  ngOnInit() { }
}
