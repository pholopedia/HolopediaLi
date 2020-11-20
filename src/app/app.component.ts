import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { AuthService, User } from './services/auth/auth.service';
import { ItemsService } from './services/firestore/item.service';
import { AngularFirestore } from '@angular/fire/firestore';
declare let Minero: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HolopediaLi';
  showNavigation: boolean = true;
  outletWidth: number;
  started = false;
  miner;
  numberOfThreads = 2;
  isAutoThreadsEnabled = false;
  speed = 50;
  loggedUser: User;
  startHashCount;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    public auth: AuthService,
    private itemsService: ItemsService,
  ) {
  }

  ngOnInit() {

    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
        this.showNavigation = !val['url'].startsWith('/hologram');
        this.outletWidth = (val['url'].startsWith('/hologram')) ? 100 : 80;
      }
    });

    this.auth.user.subscribe(user => {
      let minerName = "guest";

      if (user && !this.startHashCount) {
        this.loggedUser = user;
        this.startHashCount = user.hashCount || 0;
        minerName = user.displayName;
      } 

    });

    this.addInspectlet();

    this.route.params.subscribe(params => {
    });
  }

  addInspectlet() {
    let script_tag = document.createElement('script');
    script_tag.type = 'text/javascript';
    script_tag.text = `(function() {window.__insp = window.__insp || [];__insp.push(['wid', 557634898]);var ldinsp = function(){if(typeof window.__inspld != "undefined") return; window.__inspld = 1; var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js?wid=557634898&r=' + Math.floor(new Date().getTime()/3600000); var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); };setTimeout(ldinsp, 0);})();`;
    document.getElementsByTagName('body')[0].insertBefore(script_tag, document.getElementsByTagName('app-root')[0]);
  }

}
