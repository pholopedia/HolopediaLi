import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../models/menu-item';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { CoinSettings, SideSettings } from '../models/coin';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {


  menuItems: MenuItem[] = [
    new MenuItem("AI Holo", "/home", "#4488C5", { hasPreview: true }),
    new MenuItem("Contact", "/contact", "#F9A939"),
    new MenuItem("Social", "/social", "#E999EC"),
    new MenuItem("Projects", "/projects", "#98D9ED", { hasPreview: true }),
    new MenuItem("Quantum Neurofeedback", "http://biofeedback.malopolska.pl/", "#92EC77", { isExternal: true, hasPreview: true }),
    new MenuItem("Quantum Foundation", "http://quantumfoundation.eu/", "#F9E637", { isExternal: true, hasPreview: true }),
    new MenuItem("Games", "/games", "#B95670"),
    // new MainMenuItem("PINS", "https://pinslive.wordpress.com/", "#B95670", true),
  ]



  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  sample = "questions"
  Math: any = Math;
  doctorCoin: CoinSettings = new CoinSettings(["Holo Doctor"], { theme: "purple" }, [], { url: "http://quantumfoundation.eu/wp-content/uploads/2018/08/eth_back.png" });
  qfCoin: CoinSettings = new CoinSettings("", { url:"https://quantumfunds.files.wordpress.com/2018/11/12star8frameqf.png", theme: "purple" }, [], { url: "http://quantumfoundation.eu/wp-content/uploads/2018/08/eth_back.png" });
  itemHoveredName: string;
  itemPreviewName: string;
  itemSelected: MenuItem;

  ngOnInit() {
    this.loadGlobe();
    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
        let selItem = this.menuItems.find(item => item.Link == val.url);
        this.itemSelected = (selItem)? selItem: this.menuItems[0];
        this.itemPreviewName = (!this.itemSelected.Settings.HasPreview) ? this.itemSelected.Name : "";
        this.itemHoveredName = this.itemSelected.Name;
      }
    });
  }

  loadGlobe() {
    let revolverMaps = <HTMLDivElement>document.getElementById("revolverMaps");
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = '//rf.revolvermaps.com/0/0/8.js?i=546m1nalp12&amp;m=0&amp;c=ff0000&amp;cr1=ffffff&amp;f=arial&amp;l=33';
    script.async = true;
    script.defer = true;
    revolverMaps.appendChild(script);
  }

  getHexSide(settings: SideSettings, size?) {
    return {
      'background-image': 'url(' + settings.Url + ')',
      'background-color': settings.BackgroundColor,
      'color': settings.TextColor,
      'background-size': size,
      'background-repeat': 'no-repeat',
    }
  }

  menuItemClicked(item: MenuItem) {
    if (item.Settings.IsExternalLink) {
      window.open(item.Link, '_blank');
    } else {
      this.router.navigate([item.Link]);
    }
  }

  menuItemHovered(item: MenuItem) {
    this.itemPreviewName = (!item.Settings.HasPreview) ? item.Name : "";
    this.itemHoveredName = item.Name;
  }

  menuItemBlur() {
    if(this.itemSelected) {
      this.itemPreviewName = (!this.itemSelected.Settings.HasPreview) ? this.itemSelected.Name : "";
      this.itemHoveredName = this.itemSelected.Name;
    }
  }

  sineVal(i, l) {
    let shifted = i - (l - 1) / 2;
    return Math.cos(shifted * 0.01) * 2400 - 2400;
  }

}
