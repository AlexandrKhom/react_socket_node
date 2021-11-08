import { SET_NEW_TIME, SET_NEW_RESPONSE } from "../action-types";

const initialState = { dataHistory: [], lastResponse: [], time: 5000 };

export const currencyReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_NEW_RESPONSE: {
      return { ...state, dataHistory: [ ...state.dataHistory, state.lastResponse ], lastResponse: payload };
    }

    case SET_NEW_TIME: {
      return { ...state, time: payload };
    }

    default: {
      return state;
    }
  }
}
