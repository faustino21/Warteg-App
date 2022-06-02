import client from "../../../shared/httpClient/client"

const AuthService = () => {
    
    const verifyLogin = async (body) => {
        const response = await client.post('api/auth/login', body)
        console.log(response);
        return response
    }
    return{
        verifyLogin
    }
}

export default AuthService