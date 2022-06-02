import { useState } from "react"
import { useDispatch } from "react-redux"
import GlobalAction from "../../../redux/globalReducer/globalAction"

const CustomerListBloc = (customerService) => {
    
    const {
        getCustomers,
        deleteCustomer
    } = customerService()

    const [customerList, setCustomerList] = useState([])
    const dispatch = useDispatch()
    const getAllCustomer = async () => {
        try {
            dispatch({type : GlobalAction.IS_LOADING, loading : true})
            const response = await getCustomers()
            setCustomerList(response.data.data)
            dispatch({type : GlobalAction.IS_LOADING, loading : false})
        } catch (error) {
            console.error(error);
        }
    }

    const handleDelete = async (e) => {
        if (window.confirm(`Are you sure to delete this ${e.productName}?`)) {
           const res = await deleteCustomer(e.id)
           console.log(res);
        } else {
            getAllCustomer()
        }
    }

    return {
        customerList,
        getAllCustomer,
        handleDelete
    }
}

export default CustomerListBloc;