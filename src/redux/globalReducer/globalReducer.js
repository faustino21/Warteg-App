import GlobalAction from "./globalAction";

const GlobalState = {
    isLoading : false
}

const globalReducer = (state = GlobalState, action) => {
    switch (action.type) {
        case GlobalAction.IS_LOADING:
            console.log("loading called", state);
            return{
                ...state,
                isLoading : action.loading
            }
        default:
            break;
    }
    return state;
}

export default globalReducer;