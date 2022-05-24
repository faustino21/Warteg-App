import NavAction from "./navAction"

const navState = {
    navHero : ''
}

const navReducer = (state = navState, action) => {
    if (action.type === NavAction.SET_NAV){
        return {
            ...state, 
            navHero : action.setNav
        }
    }
    return state;
}

export default navReducer