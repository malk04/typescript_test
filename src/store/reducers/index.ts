import {combineReducers} from "redux";
import {userActionReducer} from "./userActionReducer";

export const rootReducer = combineReducers({
    userActions: userActionReducer
});