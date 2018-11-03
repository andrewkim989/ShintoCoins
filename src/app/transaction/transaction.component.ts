import { Component, OnInit } from '@angular/core';
import { HttpService } from ".././http.service";
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute
  ) { }

  transactionId: any;
  transaction: any;

  ngOnInit() {
    this.getTransaction();
  }

  getTransaction() {
    let id = this._route.snapshot.params["id"];
    this.transactionId = id;
    this.transaction = this._httpService.getOneLedger(this.transactionId);
  }
}
