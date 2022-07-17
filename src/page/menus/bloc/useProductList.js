import { useState } from "react"

const useProductList = () => {
    const [menuList, setMenuList] = useState({
        list : [],
        error : ''
    })
    
    return {menuList, setMenuList}
}

export default useProductList;