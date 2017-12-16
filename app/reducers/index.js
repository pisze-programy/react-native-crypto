// @flow
import { combineReducers } from "redux";
import nav from "./navReducer";
import coins from "./coinsReducer";

const rootReducer = combineReducers({
  nav,
  coins,
});

export default rootReducer;
