import * as types from "./actionTypes";
type Action = { type: string; payload: Object };

export function loadCoins(payload): Action {
  return {type: types.LOAD_COINS, payload};
}

export function loadFavouriteCoins(payload): Action {
  return {type: types.LOAD_FAVOURITE_COINS, payload};
}