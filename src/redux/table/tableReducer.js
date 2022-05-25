import TableAction from "./tableAction"

const tableState = {
    tables : [{
        id : "001",
        table : "Table 1",
        status : true
    },{
        id : "002",
        table : "Table 2",
        status : false
    }],
    addFormTable : false
}

const tableReducer = (state = tableState, action) => {
    if(action.type === TableAction.ADD_TABLE){
        return {
            ...state,
            tables : [...state, action.addTable]
        }
    } else if (action.type === TableAction.NAV_TO_FORM)
        return {
            ...state,
            addFormTable : action.payload
    }
    return state;
}

export default tableReducer;