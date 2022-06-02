import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import GlobalAction from "../../../redux/globalReducer/globalAction"


const MenuFormBloc = (menuService) => {
        
    const {
        getMenu,
        postMenu,
        putMenu
    } = menuService()

    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getById = async () => {
        const response = await getMenu(params.id)
        return response
    }

    const handleUpdate = async (value) => {
        try {
            dispatch({type : GlobalAction.IS_LOADING, loading : true})
            const res = await putMenu(value)
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
            const res = await postMenu(value)
            console.log("INI RES : ", res);
            dispatch({type : GlobalAction.IS_LOADING, loading : false})
            navigate('..')
        } catch (error) {
            console.error(error);
        }
    }

    return {
        params,
        getById,
        handleAdd,
        handleUpdate
    }
}

export default MenuFormBloc;