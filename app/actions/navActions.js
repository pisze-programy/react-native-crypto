import * as types from "./actionTypes";
type Action = { type: string; payload: Object };

export function openSettings(payload): Action {
  return {type: types.OPEN_SETTINGS, payload};
}

export function hideSearchInput(payload): Action {
  return {type: types.HIDE_SEARCH_INPUT, payload};
}

export function showSearchInput(payload): Action {
  return {type: types.SHOW_SEARCH_INPUT, payload};
}

export function openFavourite(payload): Action {
  return {type: types.OPEN_FAVOURITE, payload};
}

export function backPressed(payload): Action {
  return {type: types.BACK_PRESSED, payload};
}

export function showCryptoDetails(payload) {
  return { type: types.SHOW_CRYPTO_DETAILS, payload };
}
