import ActionType from "./globalAction"

const globalState = {
    isLogin : false,
    addFormMenu : false,
    addFormTable : false,
    nav : '',
    user : [
        {
            email : 'admin@gmail.com',
            password : '12345678',
        },
        {
            email : 'tino@gmail.com',
            password : '12345678',
        }

    ],
    tables : [{
            id : "001",
            table : "Table 1",
            status : "available"
        },{
            id : "002",
            table : "Table 2",
            status : "unavailable"
        }],
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
    } else if (action.type === ActionType.SET_NAV){
        return {
            ...state,
            nav : action.setNav
        }
    } else if (action.type === ActionType.LOGOUT){
        return {
            ...state,
            isLogin : action.isLogin
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