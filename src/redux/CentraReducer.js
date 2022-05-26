import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import menuReducer from "./menus/menusReducer";
import navReducer from "./navigation/navReducer";
import tableReducer from "./table/tableReducer";

export default combineReducers({
    auth : authReducer,
    nav : navReducer,
    table : tableReducer,
    menu : menuReducer
})