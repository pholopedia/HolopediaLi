import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  constructor(private fb: FacebookService) { 

  }

  ngOnInit() {
    let initParams: InitParams = {
      appId: '258799841491074',
      xfbml: true,
      version: 'v2.8'
    };

    this.fb.init(initParams);
  }

}
