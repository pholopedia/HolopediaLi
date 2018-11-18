import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'HolopediaLi';
  showNavigation: boolean = true;
  outletWidth: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {

    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
        console.log('url', val['url']);
        console.log('val', val);

        this.showNavigation = !val['url'].startsWith('/hologram');
        this.outletWidth = (val['url'].startsWith('/hologram'))? 100 : 80;
      }
    });

    this.route.params.subscribe(params => {
      console.log('params', params);
      // this.currentStep = (params.holoid)? params.holoid : "HolopediaLi";
      // this.title = this.currentStep;
      // this.description = (this.currentStep == "HolopediaLi")? this.defaultDescription: "";
    });
  }
}
