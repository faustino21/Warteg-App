import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from "yup";
import GlobalAction from '../../../redux/globalReducer/globalAction';
import './login.css'

const Login = ({bloc}) => {

    const isLoading = useSelector(state => state.global)
    const dispatch = useDispatch()

    const {
        handleVerification
    } = bloc()

    const formik = useFormik({
        initialValues : {
            email : '',
            password : ''
        },
        validationSchema : Yup.object({
            email : Yup.string().email('Invalid email').required('Required'),
            password : Yup.string().min(6,"6 min length character").required("Cannot be empty")
        }),
        onSubmit : () => {
            login()
        }
    })

    const login =async() => {
        console.log("submit called");
        dispatch({type : GlobalAction.IS_LOADING, loading : true})
        handleVerification(formik.values)
    }

  return (
    <div className='login main'>
    <form onSubmit={formik.handleSubmit}>
   <div className="d-flex flex-column login container">
       <div className="d-flex align-items-center login containerCenter">
           <div className="d-flex justify-content-end login containerEnd">
               <div className="card w-50 login backgroundColorCard">
                   <div className="card-body">
                   <h2 className="login"><i className="fas fa-unlock-alt"></i> Login Page
                       </h2>
                       <br />
                       <div>
                           <div className={`form-group`}>
                               <label htmlFor="exampleInputusername1">Email</label>
                               <input type="email" className="form-control" id="email" name='email' aria-describedby="usernameHelp" placeholder="Enter your email"
                                onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                {
                                    formik.errors.email && formik.touched.email && (
                                        <small className='text-danger'>{formik.errors.email}</small>
                                    )
                                }
                           </div>
                           <label htmlFor="exampleInputusername1">Password</label>
                           <input type="password" className="form-control" id="Password1"  name='password' aria-describedby="usernameHelp" placeholder="Enter your password"
                             onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {
                                    formik.errors.password && formik.touched.password && (
                                        <small className='text-danger'>{formik.errors.password}</small>
                                    )
                                }
                       </div>
                       <br></br>
                       <div>
                           {
                               isLoading.isLoading ? <button className="btn btn-primary" type="button" disabled>
                               <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                               Loading...
                           </button> :
                               <button type="submit"
                               className={`btn btn-primary login inputButtonawesome-button-sm`}><i
                                   className="fas fa-sign-in" ></i> Login</button>
                                   
                           }
                           
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
   </form>
</div>
  )
}

export default Login;