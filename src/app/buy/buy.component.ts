import { Component, OnInit } from '@angular/core';
import { HttpService } from ".././http.service";

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor(private _httpService: HttpService) {}

  number: number;
  coins: number;
  buy: any;
  num: any;
  invalid: boolean = false;

  ngOnInit() {
    this.getCoinValue();
    this.getCoinsOwned();
    this.buy = {number: ""};
  }

  getCoinValue(){
    this.number = this._httpService.coinValue();
    return this.number;
  }

  addToNumbers(num) {
    this._httpService.addToNumbers(num);
  }

  getCoinsOwned() {
    this.coins = this._httpService.coinsOwned();
    return this.coins;
  }

  updateCoins(num) {
    this._httpService.changeCoins(num);
  }

  updateTransaction(t) {
    this._httpService.addToLedger(t);
  } 

  buyCoins() {
    var buy = this.buy.num;
    if (buy < 1 || isNaN(buy)) {
      this.invalid = true;
    }
    else {
      this.invalid = false;
      this.number = this.getCoinValue() + 1;
      this.addToNumbers(this.number);
      this.coins = this.getCoinsOwned() + parseInt(buy);
      this.updateCoins(this.coins);
      var transaction = {action: "Bought", amount: this.getCoinsOwned(), value: this.number};
      this.updateTransaction(transaction);
      this.buy = {number: ""};
    }
  }
}
