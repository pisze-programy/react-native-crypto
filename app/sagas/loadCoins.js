import {call, put, takeEvery} from "redux-saga/effects";
import * as types from "../actions/actionTypes";
import axios from 'axios';

export function* loadCoins() {
  try {
    const coins = yield call(axios.get, 'https://api.coinmarketcap.com/v1/ticker/?limit=50', {});
    yield put({type: types.RECEIVED_COINS, data: coins.data});
  } catch (error) {
    console.error('error', error);
    yield put({type: types.FAILURE_LOAD_COINS, error});
  }
}

export function* watchLoadCoins() {
  yield takeEvery(types.LOAD_COINS, loadCoins);
}