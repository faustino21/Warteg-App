import { useState } from "react"
import { useDispatch } from "react-redux"
import GlobalAction from "../../../redux/globalReducer/globalAction"

const TableListBloc = (tableService) => {
    
    const {
        getTables,
        deleteTable
    } = tableService()

    const [tableList, setTableList] = useState([])
    const dispatch = useDispatch()
    const getAllTable = async () => {
        try {
            dispatch({type : GlobalAction.IS_LOADING, loading : true})
            const response = await getTables()
            setTableList(response.data.data)
            dispatch({type : GlobalAction.IS_LOADING, loading : false})
        } catch (error) {
            console.error(error);
        }
    }

    const handleDelete = async (e) => {
        if (window.confirm(`Are you sure to delete this ${e.productName}?`)) {
           const res = await deleteTable(e.id)
           console.log(res);
        } else {
            getAllTable()
        }
    }

    return {
        tableList,
        getAllTable,
        handleDelete
    }
}

export default TableListBloc;