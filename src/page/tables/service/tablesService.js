import client from "../../../shared/httpClient/client"


const TableService = () => {

    const getTables = async () => {
        const response = await client.get('/api/tables')
        return response
    }

    const getTable = async (id) => {
        const response = await client.get(`/api/tables/${id}`)
        return response
    }

    const postTable = async () => {
        const response = await client.post('/api/tables')
        return response
    }

    const putTable = async () => {
        const response = await client.put('/api/tables')
        return response
    }

    const deleteTable = async (id) => {
        const response = await client.delete(`/api/tables/${id}`)
        return response
    }

    return {
       getTables,
       getTable,
       postTable,
       putTable,
       deleteTable
    }
}

export default TableService;