import {call, put, takeEvery} from "redux-saga/effects";
import * as types from "../actions/actionTypes";
import axios from 'axios';
import { coin } from "../api/coins";

export function* loadCoin() {
  try {
    // const coin = yield call(axios.get, 'https://api.coinmarketcap.com/v1/ticker/?limit=50', {});
    const coin = yield call(coin, {});
    yield put({type: types.RECEIVED_COIN, data: coin.data});
  } catch (error) {
    console.error('error', error);
    yield put({type: types.FAILURE_LOAD_COIN, error});
  }
}

export function* watchLoadCoin() {
  yield takeEvery(types.LOAD_COIN, loadCoin);
}