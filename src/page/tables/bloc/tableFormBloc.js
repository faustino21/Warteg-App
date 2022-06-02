import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import GlobalAction from "../../../redux/globalReducer/globalAction"


const TableFormBloc = (menuService) => {
        
    const {
       getTable,
       postTable,
       putTable,
    } = menuService()

    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getTableById = async () => {
        const response = await getTable(params.id)
        return response
    }

    const handleUpdate = async (value) => {
        try {
            dispatch({type : GlobalAction.IS_LOADING, loading : true})
            const res = await putTable(value)
            console.log("INI RES : ", res);
            dispatch({type : GlobalAction.IS_LOADING, loading : false})
            navigate('..')
        } catch (error) {
            console.error(error);
        }
    }

    const handleAdd = async (value) => {
        try {
            dispatch({type : GlobalAction.IS_LOADING, loading : true})
            const res = await postTable(value)
            console.log("INI RES : ", res);
            dispatch({type : GlobalAction.IS_LOADING, loading : false})
            navigate('..')
        } catch (error) {
            console.error(error);
        }
    }

    return {
        params,
        getTableById,
        handleAdd,
        handleUpdate
    }
}

export default TableFormBloc;