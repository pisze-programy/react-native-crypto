// @flow
import { combineReducers } from "redux";
import nav from "./navReducer";
import coins from "./coinsReducer";
import coin from "./coinReducer";

const rootReducer = combineReducers({
  nav,
  coins,
  coin,
});

export default rootReducer;
