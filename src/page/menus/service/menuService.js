import client from "../../../shared/httpClient/client"

const MenuService = () => {

    const getMenus = async () => {
        const response = await client.get('/api/menus')
        return response
    }

    const getMenu = async (id) => {
        const response = await client.get(`/api/menus/${id}`)
        return response
    }

    const postMenu = async () => {
        const response = await client.post('/api/menus')
        return response
    }

    const putMenu = async () => {
        const response = await client.put('/api/menus')
        return response
    }

    const deleteMenu = async (id) => {
        const response = await client.delete(`/api/menus/${id}`)
        return response
    }

    return {
        getMenus,
        getMenu,
        postMenu,
        putMenu,
        deleteMenu
    }
}

export default MenuService;