import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GlobalVarsService } from "../../global-vars.service";
import { BackendApiService } from "../../backend-api.service";
import { CreatorCoinTrade } from "../../../lib/trade-creator-page/creator-coin-trade";

@Component({
  selector: "trade-creator-complete",
  templateUrl: "./trade-creator-complete.component.html",
  styleUrls: ["./trade-creator-complete.component.scss"],
})
export class TradeCreatorCompleteComponent implements OnInit {
  @Input() creatorCoinTrade: CreatorCoinTrade;
  @Input() userFollowingCreator: boolean;
  @Output() tradeAgainButtonClicked = new EventEmitter();

  router: Router;
  appData: GlobalVarsService;

  constructor(
    private globalVars: GlobalVarsService,
    private route: ActivatedRoute,
    private _router: Router,
    private backendApi: BackendApiService
  ) {
    this.appData = globalVars;
    this.router = _router;
  }

  _buyMoreClicked() {
    this.creatorCoinTrade.clearAllFields();
    this.tradeAgainButtonClicked.emit();
  }

  ngOnInit() {
    console.log('Here is the user following creator')
    console.log(this.userFollowingCreator);
    window.scroll(0, 0);
  }
}
