import {fork} from "redux-saga/effects";
import { watchLoadCoins } from "./loadCoins";

export default function* root() {
  yield [
    fork(watchLoadCoins)
  ];
}