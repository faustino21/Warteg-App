import ActionType from "./globalAction"

const globalState = {
    addFormMenu : false,
    foods : [{
            id : '001',
            name : 'Ayam Bakar',
            price : 'Rp 15.000'
        }, {
            id : '002',
            name : 'Ayam Goreng',
            price : 'Rp 12.000'
        }]
}

const rootReducer = (state = globalState, action) => {
    if (action.type === ActionType.ADD_MENUS){
        console.log("submit called");
        return{
            ...state,
            foods : [...state, action.addMenus]
        }
    } else if (action.type === ActionType.NAV_FORM_MENU){
        return {
            ...state,
            addFormMenu : action.setAddForm
        }
    }
    return state;
}

export default rootReducer