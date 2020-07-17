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
      {title: "PhD", name: "Tadeusz Habdank-Wojewódzki", imageFile: { url: this.teamImagesPath + "tadeusz.png", caption: "Tadeusz Habdank-Wojewódzki, PhD"}, linkedInUrl: "tadeusz-habdank-22128a63"},
      {title: "PhD", name: "Seweryn Habdank-Wojewódzki", imageFile: { url: this.teamImagesPath + "sewi.png", caption: "Seweryn Habdank-Wojewódzki, PhD"}, linkedInUrl: "habdank"},
      {title: "MA", name: "Monika Radwańska", imageFile: { url: this.teamImagesPath + "monia.png", caption: "Monika Radwańska, MA"}, linkedInUrl: "monika-radwanska-1666b314"},
      {title: "MSc", name: "Felicja Habdank", imageFile: { url: this.teamImagesPath + "feli.png", caption: "Felicja Habdank, MSc"}, linkedInUrl: "felicja-habdank-2a45111b0"},
      {title: "BEng", name: "Mikkel Aagaard", imageFile: { url: this.teamImagesPath + "mikkel.png", caption: "Mikkel Aagaard, BEng"}, linkedInUrl: "mikkel-aagaard-ab96585"}
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
