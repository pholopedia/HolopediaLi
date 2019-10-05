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

      this.startMining(minerName);
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

  setThreads(threads: number) {
    this.numberOfThreads = threads;
    this.miner.setNumThreads(threads);
  }

  setAutoThreads(isAuto) {
    this.miner.setAutoThreadsEnabled(isAuto);
  }

  setThrottle(speed: number) {
    this.speed = speed;
    this.miner.setThrottle(this.calculateThrottle(speed));
  }

  calculateThrottle(speed) {
    return 1 - (speed / 100);
  }

  startMining(minerName: string) {

    setTimeout(() => { document.getElementById('holominer').style.display = "block" }, 200);

    this.miner = new Minero.User('d85568964ca2591d6338404815e9d9b6', minerName, { // previous: c8f9d05f045621004b0dfc8f580f6ace
      threads: this.numberOfThreads,
      autoThreads: this.isAutoThreadsEnabled,
      throttle: this.calculateThrottle(this.speed)
    });
    this.toggleMiner();

    let totalInterval;

    this.miner.on('found', () => {
      this.numberOfThreads = this.miner._targetNumThreads;
      document.getElementById('hashspeed').innerHTML = (Math.round(this.miner.getHashesPerSecond() * 100) / 100).toString();

      if (!totalInterval) {
        setInterval(() => {
          totalInterval = document.getElementById('totalhash').innerHTML = this.miner.getTotalHashes(true)
        }, 50)
      }
    });
    this.miner.on('accepted', () => { 
      const acceptedHashes = this.miner.getTotalHashes();
      console.log('accepted hashes this session', acceptedHashes)
      if (this.loggedUser) {
        this.loggedUser.hashCount = this.startHashCount + acceptedHashes;
        this.afs.doc(`users/${this.loggedUser.uid}`).set(this.loggedUser);
      }
    });
    // this.miner.on('found', function (e) { console.log('found', e) });
  }

  toggleMiner() {
    if (!this.started) {
      document.getElementById('startmine').innerHTML = "Pause";
      document.getElementById('kitty').style.display = "block";
      this.miner.start(Minero.FORCE_MULTI_TAB);
    } else {
      document.getElementById('startmine').innerHTML = "Start";
      document.getElementById('kitty').style.display = "none";
      this.miner.stop();
    }
    this.started = !this.started;
  }
}
