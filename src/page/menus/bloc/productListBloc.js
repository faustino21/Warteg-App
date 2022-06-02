import { useState } from "react"
import { useDispatch } from "react-redux"
import GlobalAction from "../../../redux/globalReducer/globalAction"

const MenuListBloc = (menuService) => {
    
    const {
        getMenus,
        deleteMenu
    } = menuService()

    const [menuList, setMenuList] = useState([])
    const dispatch = useDispatch()
    const getAllMenu = async () => {
        try {
            dispatch({type : GlobalAction.IS_LOADING, loading : true})
            const response = await getMenus()
            setMenuList(response.data.data)
            dispatch({type : GlobalAction.IS_LOADING, loading : false})
        } catch (error) {
            console.error(error);
        }
    }

    const handleDelete = async (e) => {
        if (window.confirm(`Are you sure to delete this ${e.productName}?`)) {
           const res = await deleteMenu(e.id)
           console.log(res);
        } else {
            getAllMenu()
        }
    }

    return {
        menuList,
        getAllMenu,
        handleDelete
    }
}

export default MenuListBloc;