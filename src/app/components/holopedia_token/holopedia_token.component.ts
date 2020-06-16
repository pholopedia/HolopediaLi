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

  constructor(
    private lightbox: Lightbox
  ) { }

  ngOnInit() {
    this.team.members = [
      {title: "PhD", name: "Tadeusz Habdank-Wojewódzki", imageFileName: "tadeusz.png", linkedInUrl: "tadeusz-habdank-22128a63"},
      {title: "PhD", name: "Seweryn Habdank-Wojewódzki", imageFileName: "sewi.png", linkedInUrl: "habdank"},
      {title: "MA", name: "Monika Radwańska", imageFileName: "monia.png", linkedInUrl: "monika-radwanska-1666b314"},
      {title: "MSc", name: "Felicja Habdank", imageFileName: "feli.png", linkedInUrl: "felicja-habdank-2a45111b0"},
      {title: "BEng", name: "Mikkel Aagaard", imageFileName: "mikkel.png", linkedInUrl: "mikkel-aagaard-ab96585"}
    ]

  }

  open(src: string): void {
    // open lightbox
    this.lightbox.open([{
      src: src,
      caption: "caption",
      thumb: "thumb"
   }], 0);
  }
 
  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }

}
