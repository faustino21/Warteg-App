import client from "../../../shared/httpClient/client"

const CustomerService = () => {

    const getCustomers = async () => {
        const response = await client.get('/api/customers')
        return response
    }

    const getCustomer = async (id) => {
        const response = await client.get(`/api/customers/${id}`)
        console.log("service.getCustomer", response);
        return response
    }

    const postCustomer = async () => {
        const response = await client.post('/api/customers')
        return response
    }

    const putCustomer = async () => {
        const response = await client.put('/api/customers')
        return response
    }

    const deleteCustomer = async (id) => {
        const response = await client.delete(`/api/customers/${id}`)
        return response
    }

    return {
        getCustomers,
        getCustomer,
        postCustomer,
        putCustomer,
        deleteCustomer
    }
}

export default CustomerService;