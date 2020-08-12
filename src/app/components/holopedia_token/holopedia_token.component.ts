import { Component, OnInit } from '@angular/core';
import { Team, Member } from './team.model';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-holopedia_token',
  templateUrl: './holopedia_token.component.html',
  styleUrls: ['./holopedia_token.component.scss']
})
export class HolopediaTokenComponent implements OnInit {

  team: Team = new Team();
  partners;

  // images
  imagesPath = "assets/images/";
  coinImagesPath = this.imagesPath + "coin/";
  teamImagesPath = this.imagesPath + "team/";
  coinImage = {url: this.coinImagesPath + "HP_Holopedia.png", caption: "Holopedia Coin"};
  holopediaProjectTable = {url: this.coinImagesPath + "HolopediaProjectTable.png", caption: "Holopedia Project HP Token"};
  hybridImage = {url: this.coinImagesPath + "Private_Public_DLT.png", caption: "Schematic for hybrid DLT, courtesy https://www.he3labs.com/"};

  constructor(
    private lightbox: Lightbox
  ) { }

  ngOnInit() {
    this.team.members = [
      {title: "PhD", name: "Tadeusz Habdank-Wojewódzki", role: "Founder and initiator of the Holopedia project, Tadeusz is the main source of inspiration in Holopedia Tokens Hybrid bringing expertise in DLT algorithms for holographic sets and for the payment concepts.", imageFile: { url: this.teamImagesPath + "tadeusz.png", caption: "Tadeusz Habdank-Wojewódzki, PhD"}, linkedInUrl: "tadeusz-habdank-22128a63"},
      {title: "PhD", name: "Seweryn Habdank-Wojewódzki", role: "Seweryn’s background in robotics and automation and proficiency in machine learning provides Holopedia organization resources to apply Artificial Intelligence AI for interactive holographic humanoid projects.", imageFile: { url: this.teamImagesPath + "sewi.png", caption: "Seweryn Habdank-Wojewódzki, PhD"}, linkedInUrl: "habdank"},
      {title: "MA", name: "Monika Radwańska", role: "Monika is a professional editor in the movie industry and applies her capabilities in direction and scenography for holographic sets.", imageFile: { url: this.teamImagesPath + "monia.png", caption: "Monika Radwańska, MA"}, linkedInUrl: "monika-radwanska-1666b314"},
      {title: "MA", name: "Bolesława Habdank-Wojewódzka", role: "Bolesława is an art teacher at the University of Warsaw and her artistic work is focused on creating consciousness~supporting artistic designs in personality training applications.", imageFile: { url: this.teamImagesPath + "slawa.png", caption: "Bolesława Habdank-Wojewódzka  , MA"}, linkedInUrl: "bolesława-habdank-wojewódzka-0949901b3"},
      {title: "MSc", name: "Felicja Habdank", role: "Felicja has a rich experience managing organizations at both corporation and entrepreneurial level. In Holopedia she oversees the finance and accounting of the organization as well as the legal issues.", imageFile: { url: this.teamImagesPath + "feli.png", caption: "Felicja Habdank, MSc"}, linkedInUrl: "felicja-habdank-2a45111b0"},
      {title: "BEng", name: "Mikkel Aagaard", role: "Mikkel has extensive experience building web based applications and is translating his knowledge into DLT and hApps development and network's maintenance.", imageFile: { url: this.teamImagesPath + "mikkel.png", caption: "Mikkel Aagaard, BEng"}, linkedInUrl: "mikkel-aagaard-ab96585"}
    ]
    

    this.partners = [
      { name: "Quantum Holopedia", imageFile: "qh.png", url: "http://quantumholopedia.eu/" },
      { name: "AlphaData", imageFile: "alphadata.png" },
      { name: "Quantum Foundation IVS", imageFile: "qf.png", url: "http://quantumfoundation.eu/" },
      { name: "Quantum", imageFile: "quantum.png" },
      { name: "Private Institute for Natural Sciences PINS", imageFile: "pins.png", url: "https://pinsind.wordpress.com/" },
      { name: "Center for ElectroTherapy CET Healy", imageFile: "healy.png", url: "https://cetdata.wordpress.com/" },
      { name: "PINS Spinon", imageFile: "spinon.gif", url: "http://pinsspinon.wordpress.com/" },
    ]
  }

  open(image: any): void {
    // open lightbox
    this.lightbox.open([{
      src: image.url,
      caption: image.caption,
      thumb: "thumb"
   }], 0);
  }
 
  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }

}
