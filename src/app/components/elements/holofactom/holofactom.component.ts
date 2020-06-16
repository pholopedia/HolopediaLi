import { Component, OnInit } from '@angular/core';
import { CoinSettings, SideSettings } from '../../models/coin';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-holofactom',
  templateUrl: './holofactom.component.html',
  styleUrls: ['./holofactom.component.scss']
})
export class HolofactomComponent implements OnInit {

  title: string = "HolopediaLi";
  description: string;
  defaultDescription: string;
  coinBackgroundSelected: any;
  coinBackground: any;
  reverseUrl: string = "/assets/images/holofactom.gif";

  coins: CoinSettings[] = [
    new CoinSettings([], { url: this.reverseUrl }, [], { url: this.getFctcoinUrl(".2") }, 30),
    new CoinSettings([], { url: this.reverseUrl }, [], { url: this.getFctcoinUrl(".5") }, 15),
    new CoinSettings([], { url: this.reverseUrl }, [], { url: this.getFctcoinUrl("10") }, 90),
    new CoinSettings([], { url: this.reverseUrl }, [], { url: " " }, 90, {'opacity': '0'}),
    new CoinSettings([], { url: this.reverseUrl }, [], { url: this.getFctcoinUrl("1") }, 45),
    new CoinSettings([], { url: this.reverseUrl }, [], { url: this.getFctcoinUrl("5") }, 75),
    new CoinSettings([], { url: this.reverseUrl }, [], { url: this.getFctcoinUrl("2") }, 60),
  ];
  
  coinBackgrounds = [
    { name: "H in 12-sided-star", 
      value: "h12star",
      style: {
        'background-image': 'url(https://quantumfunds.files.wordpress.com/2018/11/12star_h_1.png)',
        'padding': '314px 154px'
      }  
    },
    { name: "DNA hex helix", 
      value: "dnahelix",
      style: {
        'background-image': 'url(/assets/images/HexOrg1000.png)',
        'padding': '254px 80px',
        'margin-top': '60px'
      }
    },
    { name: "Qs protection", 
      value: "qprotection",
      style: {
        'background-image': 'url(/assets/images/Q_pro_frame_square.png)',
        'padding': '160px 60px',
        'margin-top': '154px'
      }
    }
  ]

  starBgUrl: string;
  starIndex: number;
  currentStep: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { 

  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.currentStep = (params.project)? params.project : "HolopediaLi";
      this.title = this.currentStep;
      this.description = (this.currentStep == "HolopediaLi")? this.defaultDescription: "";
    });

    this.coinBackground = this.coinBackgrounds[0];
    this.coinBackgroundSelected = this.coinBackground.value;

    // this.starBgUrl = `https://quantumfunds.files.wordpress.com/2018/11/12star_h_${this.starIndex}.png`;
    
    // setInterval(x => this.iterateStarBg(), 810);
  }
  onBackgroundChange(event) {
    this.coinBackground = this.coinBackgrounds.find(bg => bg.value == event)
  }

  iterateStarBg() {
    this.starIndex = (this.starIndex == 1)? 2: 1;
    this.starBgUrl = `https://quantumfunds.files.wordpress.com/2018/11/12star_h_${this.starIndex}.png`;
  }

  getFctcoinUrl(value) {
    return `http://quantumfoundation.eu/wp-content/uploads/2017/06/FCTcoins_${value}_512.png`;
  }

  getHexSide(settings: SideSettings, size) {
    return {
      'background-image': 'url(' + settings.Url + ')',
      'background-color': settings.BackgroundColor,
      'color': settings.TextColor,
      'background-size': size,
      'background-repeat': 'no-repeat',
    }
  }

  selectHex(obverse, event: MouseEvent) {
  }

  selectProject(project) {
    if (project.name != "Put in Your Hologram for Holopedia HPA") {
      this.router.navigate(['/hologram'], { queryParams: {'project': project.name} });
    } else {
      this.router.navigate(['/hologram']);
    }
  }

}
