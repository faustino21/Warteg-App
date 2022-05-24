import AuthAction from "./authAction"

const authState = {
    isLogin : false,
    user : [
        {
            email : 'admin@gmail.com',
            password : '12345678',
        },
        {
            email : 'tino@gmail.com',
            password : '12345678',
        }
    ]
}

const authReducer = (state = authState, action) => {
    if (action.type === AuthAction.IS_LOGIN){
        return{
            ...state, 
            isLogin : action.payload
        }
    }
    return state;
}

export default authReducer