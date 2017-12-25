import * as types from "../actions/actionTypes";
type Action = { type: string; payload: Object };

export default function coinsReducer(state = {}, action): Action {
  let prepare = {};

  switch (action.type) {
    //  All Coins
    case types.LOAD_COINS:
      prepare = {
        isFetching: true,
        error: null,
        data: null,
      };

      return Object.assign({}, action.payload, prepare);

    case types.RECEIVED_COINS:
      prepare = {
        isFetching: false,
        error: null,
        data: action.data,
      };

      return Object.assign({}, action.payload, prepare);

    case types.FAILURE_LOAD_COINS:
      prepare = {
        isFetching: false,
        coins: null,
        data: action.error,
      };

      return Object.assign({}, action.payload, prepare);

    //  Favourite Coins
    case types.LOAD_FAVOURITE_COINS:
      prepare = {
        isFetching: true,
        error: null,
        data: null,
      };

      return Object.assign({}, action.payload, prepare);

    case types.RECEIVED_FAVOURITE_COINS:
      prepare = {
        isFetching: false,
        error: null,
        data: action.data,
      };

      return Object.assign({}, action.payload, prepare);

    case types.FAILURE_LOAD_FAVOURITE_COINS:
      prepare = {
        isFetching: false,
        coins: null,
        data: action.error,
      };

      return Object.assign({}, action.payload, prepare);

    default:
      return state;
  }
}