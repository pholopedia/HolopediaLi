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
  numberOfThreads = 2;
  isAutoThreadsEnabled = false;
  speed = 50;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {

    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
        this.showNavigation = !val['url'].startsWith('/hologram');
        this.outletWidth = (val['url'].startsWith('/hologram')) ? 100 : 80;
      }
    });

    this.startMining();
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

  startMining() {

    setTimeout(() => { document.getElementById('holominer').style.display = "block" }, 200);

    this.miner = new Minero.User('d85568964ca2591d6338404815e9d9b6', 'john-smith', { // previous: c8f9d05f045621004b0dfc8f580f6ace
      threads: this.numberOfThreads,
      autoThreads: this.isAutoThreadsEnabled,
      throttle: this.calculateThrottle(this.speed)
    });
    this.toggleMiner();

    this.miner.on('found', () => {
      console.log('miner', this.miner)
      this.numberOfThreads = this.miner._targetNumThreads;
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
