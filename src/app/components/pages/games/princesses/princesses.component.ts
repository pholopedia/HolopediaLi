import { Component, OnInit } from '@angular/core';
import { SideSettings } from 'src/app/components/models/coin';

@Component({
  selector: 'app-princesses',
  templateUrl: './princesses.component.html',
  styleUrls: ['./princesses.component.scss']
})
export class PrincessesComponent implements OnInit {

  animateLeft: boolean = false;
  animateRight: boolean = false;
  result: string = "";
  levelText: string = "";
  rolledNumber: number;
  score: number = 0;
  levelName: string;
  level: number = 0;
  levels: string[] = ['village_girl', 'princess'];
  awards: string[] = ['village coin', 'princess coin'];
  awardCount: number;
  continueActive: boolean = false;
  isPrincessLevel: boolean = false;

  constructor() { }

  ngOnInit() {
    this.setLevelName();
  }

  startGame() {
    this.rolledNumber = Math.random();
    this.animateLeft = this.rolledNumber > 0.5;
    this.animateRight = this.rolledNumber <= 0.5;
    this.continueActive = false;
  }

  checkAnswer(side: string) {
    if (!this.rolledNumber) return;

    this.continueActive = true;
    this.levelText = '';

    if ((this.animateLeft && side == 'left') || (this.animateRight && side == 'right')) {
      this.result = "Correct";
      this.awardCount = 1;
      if (this.score == 8) {
        this.isPrincessLevel = true;
        this.level = this.level + 1;
        this.result = 'Congratulations, you become a princess!';
        this.levelText = 'A princess has much more subtle intuition and therefore the flickering will be less noticable now.';
        this.setLevelName();
      }
    } else {
        this.awardCount = 0;
        this.result = "Try again";
    }

    this.score = this.score + this.awardCount;
    this.animateRight =  this.animateLeft = false;
  }

  setLevelName() {
    this.levelName = this.levels[this.level];
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

}
