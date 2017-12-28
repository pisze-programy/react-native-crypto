import * as types from "../actions/actionTypes";
type Action = { type: string; payload: Object };

export default function coinReducer(state = {}, action): Action {
  let prepare = {};

  switch (action.type) {

    //  Coin Details
    case types.LOAD_COIN:
      prepare = {
        isFetching: true,
        error: null,
        data: null,
      };

      return Object.assign({}, action.payload, prepare);

    case types.RECEIVED_COIN:
      prepare = {
        isFetching: false,
        error: null,
        data: action.data,
      };

      return Object.assign({}, action.payload, prepare);

    case types.FAILURE_LOAD_COIN:
      prepare = {
        isFetching: false,
        data: null,
        error: action.error,
      };

      return Object.assign({}, action.payload, prepare);

    default:
      return state;
  }
}