import { combineReducers } from "redux";
import globalReducer from "./globalReducer/globalReducer";

export default combineReducers({
    global : globalReducer
})