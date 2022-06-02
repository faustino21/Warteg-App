import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { LoadingScreen } from '../../../layout/loadingScreen';
import GlobalAction from '../../../redux/globalReducer/globalAction';

const CustomerForm = ({bloc}) => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const loading = useSelector(state => state.global)
    const {
        params,
        getCustomerById,
        handleAdd,
        handleUpdate
    } = bloc()

    useEffect(() => {
        if(params.id){
            dispatch({type : GlobalAction.IS_LOADING, loading : true})
            getCustomerData();
        }
    }, [])

    const getCustomerData = async () => {
        const response = await getCustomerById()
        console.log(response);
        formik.values.id = response.data.id;
        formik.values.nama = response.data.nama;
        formik.values.email = response.data.email;
        formik.values.alamat = response.data.alamat;
        formik.setFieldValue(response);
        dispatch({type : GlobalAction.IS_LOADING, loading : false})
    }

  const formik = useFormik({
  initialValues: {
    id : '',
    nama : '',
    email : '',
    alamat : ''
  },
  validationSchema : Yup.object({
    id : Yup.string().required("field cannot be empty"),
    nama : Yup.string().required("field cannot be empty"),
    email : Yup.string().email("Invalid email").required("field cannot be empty"),
    alamat : Yup.string().required("field cannot be empty")
    }),
    onSubmit : () => {
        if (params.id) {
            handleUpdate(formik.values)
        } else {
            handleAdd(formik.values)
        }
    }
  })

  const submitButton = formik.values.id && formik.values.nama && formik.values.email && formik.values.alamat


  return (
   <div>
   {
       loading.isLoading ? <LoadingScreen/> :
    <div>
        <h1>CUSTOMER FORM</h1> 
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label htmlFor='name' className="form-label">ID Customer</label>
        <input name='id' type="text" className="form-control" value={formik.values.id} onChange={formik.handleChange} onBlur={formik.handleBlur} readOnly={params.id}/>
        {
          formik.errors.id && formik.touched.id && (
            <small className='text-danger'>{formik.errors.id}</small>
          )
        }
      </div>
      <div className="mb-3">
        <label htmlFor="nama" className="form-label">Nama</label>
        <input name='nama' type="text" className="form-control" value={formik.values.nama} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {
          formik.errors.nama && formik.touched.nama && (
            <small className='text-danger'>{formik.errors.nama}</small>
          )
        }
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label" >Email</label>
        <input name='email' type='email' className="form-control" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {
          formik.errors.email && formik.touched.email && (
            <small className='text-danger'>{formik.errors.email}</small>
          )
        }
      </div>
      <div className="mb-3">
        <label htmlFor="alamat" className="form-label">Alamat</label>
        <input name='alamat' type='text' className="form-control" value={formik.values.alamat} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {
          formik.errors.alamat && formik.touched.alamat && (
            <small className='text-danger'>{formik.errors.alamat}</small>
          )
        }
      </div>
      <button type="submit" className="btn btn-primary" disabled={!submitButton}>Submit</button>
      <button type="button" className="btn btn-primary" onClick={()=> navigate('..')}>Cancel</button>
    </form>
    </div>
    }
    </div>
  )
}

export default CustomerForm;
