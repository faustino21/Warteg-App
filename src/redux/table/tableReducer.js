import TableAction from "./tableAction"

export const tableState = {
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
        console.log("Submit called");
        return {
            ...state,
            tables : [...state.tables, action.addTable]
        }
    } else if (action.type === TableAction.NAV_TO_FORM){
        return {
            ...state,
            addFormTable : action.payload
        }
    } else if (action.type === TableAction.REMOVE_TABLE){
        return{
            ...state,
            tables : [...state.tables.filter((data)=> data.id !== action.payload)]
        }
    } 
    return state;
}

export default tableReducer;