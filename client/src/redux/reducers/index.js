import { combineReducers } from "redux";

import {  currencyReducer } from "./currencyReducer";
import { themeReducer } from "./theme";

export const reducer = combineReducers({
  currency: currencyReducer,
  theme: themeReducer
})
