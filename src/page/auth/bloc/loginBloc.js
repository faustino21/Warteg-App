import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import GlobalAction from '../../../redux/globalReducer/globalAction';

const AuthBloc = (authRepository) => {
    const {
        verifyLogin
    } = authRepository()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const handleVerification = async (values) => {
        try {
            const res = await verifyLogin(values)
            console.log("return", res);
            sessionStorage.setItem("token", res.data.token)
            navigate("/protected", {replace: true})
        } catch (error) {
            dispatch({type : GlobalAction.IS_LOADING, loading : false})
            swal({
                title: "Unauthorized",
                text: "Incorrect Password or email",
                icon: "error",
                button: "Retry",
            });
        }
    }
    return{
        handleVerification
    }

}

export default AuthBloc;

