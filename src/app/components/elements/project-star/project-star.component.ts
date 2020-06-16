import { Component, OnInit } from '@angular/core';
import { CoinSettings, SideSettings } from '../../models/coin';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-star',
  templateUrl: './project-star.component.html',
  styleUrls: ['./project-star.component.scss']
})
export class ProjectStarComponent implements OnInit {

  title: string = "HolopediaLi";
  description: string;
  defaultDescription: string = `HoloMedicine
  <br> HoloArt HoloApplications HoloAlgorithm
  <br> HoloSmart HoloSustainability HoloSystems HoloSimulations
  <br> HoloTechnology HoloTherapies HoloTunnels Holotomography
  <br> HoloEducation HoloEmulation
  <br> HoloResearch`

  coins: CoinSettings[] = [
    new CoinSettings(["Holo Research"], { theme:  "purple" }, [], { url: this.getFctcoinUrl(".2") }),
    new CoinSettings(["Holo Education", "Holo Emulation"], { theme: "indigo" }, [], { url: this.getFctcoinUrl(".5") }),
    new CoinSettings(["Holo Medicine"], { theme: "red" }, [], { url: this.getFctcoinUrl("10") }),
    new CoinSettings(["Holo Master"], { theme: "beige" }, [], { url: "assets/images/coin/HP_Holopedia.png" }),
    new CoinSettings(["Holo Technology", "Holo Therapies", "Holo Tunnels", "Holo Tomography"], { theme: "turquoise" }, [], { url: this.getFctcoinUrl("1") }),
    new CoinSettings(["Holo Artificial Intelligence", "Holo Applications", "Holo Algorithm"], { theme: "orange" }, [], { url: this.getFctcoinUrl("5") }),
    new CoinSettings(["Holo Smart", "Holo Sustainability", "Holo Systems", "Holo Simulations"], { theme: "olive" }, [], { url: this.getFctcoinUrl("2") }),
  ]

  projects = [
    {name: "Put in Your Hologram for Holopedia HPA",   style: { top: "20px",   left: "50%",                transform: "translateX(-50%)"}},
    {name: "Holo Medicine",                                style: { top: "64px",   left: "calc(50% - 97px)",   transform: "translateX(-100%)"}},
    {name: "Holo Artificial Intelligence",                 style: { top: "123px",  left: "calc(50% - 190px)",  transform: "translateX(-100%)"}},
    {name: "Holo Applications",                            style: { top: "216px",  left: "calc(50% - 246px)",  transform: "translateX(-100%)"}},
    {name: "Holo Algorithms",                              style: { top: "320px",  left: "calc(50% - 266px)",  transform: "translateX(-100%)"}},
    {name: "Holo Smart",                                   style: { top: "424px",  left: "calc(50% - 246px)",  transform: "translateX(-100%)"}},
    {name: "Holo Sustainability",                          style: { top: "516px",  left: "calc(50% - 190px)",  transform: "translateX(-100%)"}},
    {name: "Holo Systems",                                 style: { top: "574px",  left: "calc(50% - 97px)",   transform: "translateX(-100%)"}},
    {name: "Holo Simulations",                             style: { top: "624px",  left: "50%",                transform: "translateX(-50%)"}},
    {name: "Holo Technology",                              style: { top: "574px",  left: "calc(50% + 97px)"}},
    {name: "Holo Therapies",                               style: { top: "516px",  left: "calc(50% + 190px)"}},
    {name: "Holo Tunnels",                                 style: { top: "424px",  left: "calc(50% + 246px)"}},
    {name: "Holo Tomography",                              style: { top: "320px",  left: "calc(50% + 266px)"}},
    {name: "Holo Education",                               style: { top: "216px",  left: "calc(50% + 246px)"}},
    {name: "Holo Emulation",                               style: { top: "123px",  left: "calc(50% + 190px)"}},
    {name: "Holo Research",                                style: { top: "64px",   left: "calc(50% + 97px)"}},
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
    this.starBgUrl = `/assets/images/coin/12star_hp.png`;

    
    // setInterval(x => this.iterateStarBg(), 810);
  }

  iterateStarBg() {
    this.starIndex = (this.starIndex == 1)? 2: 1;
    this.starBgUrl = `https://quantumfunds.files.wordpress.com/2018/11/12star_h_${this.starIndex}.png`;
  }

  getFctcoinUrl(value) {
    return `assets/images/coin/HP_Holopedia.png`;
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
