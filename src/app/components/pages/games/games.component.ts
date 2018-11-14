import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  triangles: Array<any> = [
    {class: "right", colors: ['turquoise transparent', '#28bdaf transparent']},
    {class: "right", colors: ['turquoise transparent', '#28bdaf transparent']},
    {class: "left", colors: ['red transparent', '#f00000 transparent']},
    {class: "left", colors: ['red transparent', '#f00000 transparent']},
    {class: "top", colors: ['purple transparent', '#b404b4 transparent']},
    {class: "top", colors: ['purple transparent', '#b404b4 transparent']},
  ]

  constructor() { }

  ngOnInit() {
    Observable.timer(60,100).subscribe(t=> this.flicker("right"));
    Observable.timer(60,60).subscribe(t=> this.flicker("left"));
    Observable.timer(60,25).subscribe(t=> this.flicker("top"));
  }

  colorsIndex = 0;
  colors = ['red transparent', '#f00000 transparent'];

  flicker(elemClass: any) {
    let elem = this.triangles.filter(e => e.class == elemClass);
    var result: HTMLCollectionOf<Element> = document.getElementsByClassName(elemClass);
    for(var i=0, len=result.length; i<len; i++)
    {
      let element = <HTMLElement>result[i];
      element.style["border-color"] = elem[this.colorsIndex].colors[this.colorsIndex];
    }
    this.colorsIndex = (this.colorsIndex + 1) % this.colors.length;
  }

}
