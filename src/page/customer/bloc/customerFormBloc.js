import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import GlobalAction from "../../../redux/globalReducer/globalAction"


const CustomerFormBloc = (customerService) => {
        
    const {
        getCustomer,
        postCustomer,
        putCustomer,
    } = customerService()

    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getCustomerById = async () => {
        const response = await getCustomer(params.id)
        console.log("INI DI BLOC", response);
        return response
    }

    const handleUpdate = async (value) => {
        try {
            dispatch({type : GlobalAction.IS_LOADING, loading : true})
            const res = await putCustomer(value)
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
            const res = await postCustomer(value)
            console.log("INI RES : ", res);
            dispatch({type : GlobalAction.IS_LOADING, loading : false})
            navigate('..')
        } catch (error) {
            console.error(error);
        }
    }

    return {
        params,
        getCustomerById,
        handleAdd,
        handleUpdate
    }
}

export default CustomerFormBloc;