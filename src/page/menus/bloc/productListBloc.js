import { useDispatch } from "react-redux"
import GlobalAction from "../../../redux/globalReducer/globalAction"

const MenuListBloc = (menuService, RouteNavigate, useProductList) => {
    
    const {
        getMenus,
        deleteMenu
    } = menuService()

    // const [menuList, setMenuList] = useState([])
    const {navigateTo} = RouteNavigate()
    const {menuList, setMenuList} = useProductList()
    const dispatch = useDispatch()
    
    const getAllMenu = async () => {
        try {
            dispatch({type : GlobalAction.IS_LOADING, loading : true})
            const response = await getMenus()
            setMenuList({list : response.data.data})
            dispatch({type : GlobalAction.IS_LOADING, loading : false})
        } catch (error) {
            setMenuList({
                list : [],
                error : error
            })
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

    const handleUpdate = (id) => {
        navigateTo(`form/${id}`)
    }

    const handleAdd = () => {
        navigateTo('form')
    }

    return {
        menuList,
        getAllMenu,
        handleDelete,
        handleAdd,
        handleUpdate
    }
}

export default MenuListBloc;