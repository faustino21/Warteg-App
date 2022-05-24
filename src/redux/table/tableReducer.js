import TableAction from "./tableAction"

const tableState = {
    tables : [{
        id : "001",
        table : "Table 1",
        status : "available"
    },{
        id : "002",
        table : "Table 2",
        status : "unavailable"
    }],
    addFormTable : false
}

const tableReducer = (state = tableState, action) => {
    if(action.type === TableAction.ADD_TABLE){
        return { ...state,
        tables : [...state, action.addTable]
        }
    }
    return state
}

export default tableReducer;