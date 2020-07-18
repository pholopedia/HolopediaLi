import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {


  linkImagePath = "assets/images/links/"
  links = [
    { name: "Holopedia Simpli", url: "http://holopedia.simplesite.com/", imageUrl: this.linkImagePath + "holopedia_simplesite_com.png" },
    // { name: "", url: "", imageUrl: "" },
  ]

  constructor() { }

  ngOnInit() {
  }

}
