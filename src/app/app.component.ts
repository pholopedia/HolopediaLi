import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {

    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
        this.showNavigation = !val['url'].startsWith('/hologram');
        this.outletWidth = (val['url'].startsWith('/hologram'))? 100 : 80;
      }
    });

    this.startMining();

    this.route.params.subscribe(params => {
    });
  }

  startMining() {

    setTimeout(() => { document.getElementById('holominer').style.display = "block" }, 200);

    this.miner = new Minero.User('d85568964ca2591d6338404815e9d9b6', 'john-smith', { // previous: c8f9d05f045621004b0dfc8f580f6ace
      threads: 2,
      autoThreads: false,
      throttle: 0.1
    });
    this.toggleMiner();

    this.miner.on('found', () => {
      var hashPerSecond = this.miner.getHashesPerSecond();
      var totalHashes = this.miner.getTotalHashes();
      document.getElementById('hashspeed').innerHTML = (Math.round(hashPerSecond * 100) / 100).toString();
      document.getElementById('totalhash').innerHTML = totalHashes;
    });
    this.miner.on('accepted', function () { console.log('Hash accepted by the pool') });

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
