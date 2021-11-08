import { SET_NEW_RESPONSE, SET_NEW_TIME } from "../action-types";


export const setNewResponse = (payload) => ({type: SET_NEW_RESPONSE, payload});
export const setNewTime = (payload) => ({type: SET_NEW_TIME, payload});
