import MenuAction from "./menuAction";

const menuState = {
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

const menuReducer = (state = menuState, action) => {
    if (action.type === MenuAction.ADD_MENUS){
        console.log("submit called");
        return{
            ...state,
            foods : [...state.foods, action.addMenus]
        };
    } else if (action.type === MenuAction.NAV_FORM_MENU){
        return {
            ...state,
            addFormMenu : action.setAddForm
        }
    } else if (action.type === MenuAction.REMOVE_MENUS){
        return{
            ...state,
            foods : [...state.foods.filter((data)=> data.id !== action.foods)]
        }
    }
    return state;
}

export default menuReducer