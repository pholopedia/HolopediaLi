import { Component, OnInit } from '@angular/core';
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

  sub_name
  sub_email

  constructor(
    public auth: AuthService,
    private itemsService: ItemsService,
    ) { 
    
  }

  ngOnInit() {
  }

  subscribe() {
    this.itemsService.addItem({name: this.sub_name, email: this.sub_email}, this.subscribersCN);
    this.subscribed = true;
  }

}
