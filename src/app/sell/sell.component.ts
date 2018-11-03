import { Component, OnInit } from '@angular/core';
import { HttpService } from ".././http.service";

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  number: number;
  coins: number;
  sell: any;
  num: any;
  invalid: boolean = false;
  notenough: boolean = false;

  ngOnInit() {
    this.getCoinValue();
    this.getCoinsOwned();
    this.sell = {number: ""};
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

  sellCoins() {
    var sell = parseInt(this.sell.num);
    if (sell < 1 || isNaN(sell)) {
      this.invalid = true;
      this.notenough = false;
    }
    else if (sell > this.getCoinsOwned()) {
      this.notenough = true;
      this.invalid = false;
    }
    else {
      if (this.getCoinValue() == 1) {
        this.number = 1;
      }
      else {
        this.number = this.getCoinValue() - 1;
      }
      this.invalid = false;
      this.notenough = false;
      this.addToNumbers(this.number);
      this.coins = this.getCoinsOwned() - sell;
      this.updateCoins(this.coins);
      var transaction = {action: "Sold", amount: this.getCoinsOwned(), value: this.number};
      this.updateTransaction(transaction);
      this.sell = {number: ""};
    }
  }
}
