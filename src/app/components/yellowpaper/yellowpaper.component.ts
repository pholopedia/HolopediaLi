import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ItemsService } from 'src/app/services/firestore/item.service';

@Component({
  selector: 'app-yellowpaper',
  templateUrl: './yellowpaper.component.html',
  styleUrls: ['./yellowpaper.component.scss']
})
export class YellowpaperComponent implements OnInit {

  subscribed = false
  subscribersCN: string = 'subscribers';
  subscribedCookieName = 'subscribed';

  sub_name
  sub_email

  constructor(
    public auth: AuthService,
    private itemsService: ItemsService,
    private cookieService: CookieService,
    ) { 
    
  }

  ngOnInit() {
    this.subscribed = this.cookieService.get(this.subscribedCookieName) === 'true';
  }

  subscribe() {
    this.cookieService.set(this.subscribedCookieName, 'true' );
    this.itemsService.addItem({name: this.sub_name, email: this.sub_email}, this.subscribersCN);
    this.subscribed = true;
  }

}
