import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {reducer} from "./reducers";

export * from './action-creators';

export const store = createStore(reducer, applyMiddleware(thunk));
