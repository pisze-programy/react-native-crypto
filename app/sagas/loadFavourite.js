import {call, put, takeEvery} from "redux-saga/effects";
import * as types from "../actions/actionTypes";
import axios from 'axios';
import { favouriteList } from "../api/coin";

export function* loadFavouriteCoins() {
  try {
    // const coins = yield call(axios.get, 'https://api.coinmarketcap.com/v1/ticker/?limit=2', {});
    const coins = yield call(favouriteList, {});
    yield put({type: types.RECEIVED_FAVOURITE_COINS, data: coins.data});
  } catch (error) {
    console.error('error', error);
    yield put({type: types.FAILURE_LOAD_FAVOURITE_COINS, error});
  }
}

export function* watchLoadFavouriteCoins() {
  yield takeEvery(types.LOAD_FAVOURITE_COINS, loadFavouriteCoins);
}