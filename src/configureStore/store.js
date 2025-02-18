
import {accountReducer} from "../reducer/accountReducer.js";
import {legacy_createStore} from "redux";

const initialState = {
    balance: 0,
}

export const store = legacy_createStore(accountReducer, initialState);
