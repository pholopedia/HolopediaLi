import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-princesses',
  templateUrl: './princesses.component.html',
  styleUrls: ['./princesses.component.scss']
})
export class PrincessesComponent implements OnInit {

  animateLeft: boolean = false;
  animateRight: boolean = false;
  result: string = ""
  rolledNumber: number;
  score: number = 0;

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.rolledNumber = Math.random();
    this.animateLeft = this.rolledNumber > 0.5;
    this.animateRight = this.rolledNumber <= 0.5;
  }

  checkAnswer(side: string) {
    if ((this.animateLeft && side == 'left') || (this.animateRight && side == 'right')) {
      this.result = "Correct";
      this.score = this.score + 1;
    } else {
      this.result = "Try again";
    }
    this.animateRight =  this.animateLeft = false;
  }

}
