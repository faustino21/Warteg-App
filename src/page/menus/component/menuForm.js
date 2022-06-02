import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { LoadingScreen } from '../../../layout/loadingScreen';
import GlobalAction from '../../../redux/globalReducer/globalAction';

const MenuForm = ({bloc}) => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const loading = useSelector(state => state.global)
    const {
        params,
        getById,
        handleAdd,
        handleUpdate
    } = bloc()

    useEffect(() => {
        if(params.id){
            dispatch({type : GlobalAction.IS_LOADING, loading : true})
            getMenubyId();
        }
    }, [])

    const getMenubyId = async () => {
        const response = await getById()
        formik.values.id = response.data.id;
        formik.values.name = response.data.name;
        formik.values.price = response.data.price;
        formik.setFieldValue(response);
        dispatch({type : GlobalAction.IS_LOADING, loading : false})
    }

  const formik = useFormik({
  initialValues: {
    id : '',
    name : '',
    price : ''
  },
  validationSchema : Yup.object({
    id : Yup.string().required("field cannot be empty"),
    name : Yup.string().required("field cannot be empty"),
    price : Yup.number().required("field cannot be empty")
    }),
    onSubmit : () => {
        if (params.id) {
            handleUpdate(formik.values)
        } else {
            handleAdd(formik.values)
        }
    }
  })

  const submitButton = formik.values.id && formik.values.name && formik.values.price

  return (
   <div>
   {
       loading.isLoading ? <LoadingScreen/> :
    <div> 
        <h1>MENU FORM</h1> 
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label htmlFor='name' className="form-label">ID Menu</label>
        <input name='id' type="text" className="form-control" value={formik.values.id} onChange={formik.handleChange} onBlur={formik.handleBlur} readOnly={params.id}/>
        {
          formik.errors.id && formik.touched.id && (
            <small className='text-danger'>{formik.errors.id}</small>
          )
        }
      </div>
      <div className="mb-3">
        <label htmlFor="passcode" className="form-label" >Name</label>
        <input name='name' type="text" className="form-control" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {
          formik.errors.name && formik.touched.name && (
            <small className='text-danger'>{formik.errors.name}</small>
          )
        }
      </div>
      <div className="mb-3">
        <label htmlFor="passcode" className="form-label" >Price</label>
        <input name='price' type='number' className="form-control" value={formik.values.price} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {
          formik.errors.price && formik.touched.price && (
            <small className='text-danger'>{formik.errors.price}</small>
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

export default MenuForm;
