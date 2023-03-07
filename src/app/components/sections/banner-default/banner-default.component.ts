import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-default',
  templateUrl: './banner-default.component.html',
  styleUrls: ['./banner-default.component.css']
})
export class BannerDefaultComponent {
  @Input() title:string = "";
}
