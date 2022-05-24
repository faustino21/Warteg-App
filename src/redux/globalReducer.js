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
    if(action.type === ActionType.ADD_TABLE){
        return {
            ...state,
            tables : [...state, action.addTable]
        }
    } else if (action.type === ActionType.ADD_MENUS){
        return{
            ...state,
            menus : [...state, action.addMenus]
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