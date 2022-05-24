import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import rootReducer from "./globalReducer";


const auth = authReducer
const global = rootReducer



export default combineReducers({
    auth : auth,
    global : global
})