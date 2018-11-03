import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  numbers = [1];
  coins = [0];
  ledger = [{}];
  l: any;

  coinValue() {
    return this.numbers[this.numbers.length - 1];
  }

  addToNumbers(num){
    this.numbers.push(num);
  }

  coinsOwned() {
    return this.coins[this.coins.length - 1];
  }

  changeCoins(num){
    this.coins.push(num);
  }

  getLedger() {
    return this.ledger;
  }
  
  getOneLedger(id) {
    this.l = this.ledger[id];
    return this.l;
  }

  addToLedger(transaction) {
    this.ledger.push(transaction);
  }
}
