import { Content } from './acl-image-content.model';

export class ACLImage {
    id:string;
    name:string;
    version:string;
    variant:string;
    state:string;
    content:Content;
}
