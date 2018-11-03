import { Component, OnInit } from '@angular/core';
import { HttpService } from ".././http.service";

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  answer: any;
  number: number;
  correct: boolean = false;
  incorrect: boolean = false;

  ngOnInit() {
    this.answer = {answer: ""};
  }

  getCoinsOwned() {
    return this._httpService.coinsOwned();
  }

  getCoinValue() {
    this.number = this._httpService.coinValue();
    return this.number;
  }

  addToNumbers(num) {
    this._httpService.addToNumbers(num);
  }

  updateTransaction(t) {
    this._httpService.addToLedger(t);
  } 

  getAnswer (answer) {
    if (answer.answer == "Unicorn" || answer.answer == "unicorn") {
      this.correct = true;
      this.incorrect = false;
      this.number = this.getCoinValue() + 1;
      this.addToNumbers(this.number);
      var transaction = {action: "Mined", amount: this.getCoinsOwned(), value: this.number};
      this.updateTransaction(transaction);
      this.answer = {answer: ""};
    }
    else {
      this.correct = false;
      this.incorrect = true;
      this.answer = {answer: ""};
    }
  }
}
