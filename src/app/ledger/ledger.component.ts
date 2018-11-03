import { Component, OnInit } from '@angular/core';
import { HttpService } from ".././http.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  transactions: any;

  ngOnInit() {
    this.allTransactions();
  }

  allTransactions() {
    this.transactions = this._httpService.getLedger();
  }

  goToTransaction(t) {
    this._router.navigate(["/transaction", this.transactions.indexOf(t)]);
  }
}
