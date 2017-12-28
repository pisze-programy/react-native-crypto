import {fork} from "redux-saga/effects";
import { watchLoadCoins } from "./loadCoins";
import { watchLoadCoin } from "./loadCoin";
import { watchLoadFavouriteCoins } from "./loadFavourite";

export default function* root() {
  yield [
    fork(watchLoadCoins),
    fork(watchLoadCoin),
    fork(watchLoadFavouriteCoins)
  ];
}