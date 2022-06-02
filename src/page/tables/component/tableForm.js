import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { LoadingScreen } from '../../../layout/loadingScreen';
import GlobalAction from '../../../redux/globalReducer/globalAction';

const TableForm = ({bloc}) => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const loading = useSelector(state => state.global)
    const {
        params,
        getTableById,
        handleAdd,
        handleUpdate
    } = bloc()

    useEffect(() => {
        if(params.id){
            dispatch({type : GlobalAction.IS_LOADING, loading : true})
            getTableData();
        }
    }, [])

    const getTableData = async () => {
        const response = await getTableById()
        formik.values.id = response.data.id;
        formik.values.nomor = response.data.nomor;
        formik.values.status = response.data.status;
        formik.setFieldValue(response);
        dispatch({type : GlobalAction.IS_LOADING, loading : false})
    }

  const formik = useFormik({
    initialValues: {
        id : '',
        nomor : '',
        status : ''
    },
    validationSchema : Yup.object({
        id : Yup.string().required("field cannot be empty"),
        nomor : Yup.string().required("field cannot be empty"),
        }),
        onSubmit : () => {
            if (params.id) {
                handleUpdate(formik.values)
            } else {
                handleAdd(formik.values)
            }
        }
  })

  const submitButton = formik.values.id && formik.values.nomor && formik.values.status


  return (
   <div>
   {
       loading.isLoading ? <LoadingScreen/> :
    <div> 
        <h1>TABLE FORM</h1> 
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label htmlFor='name' className="form-label">ID Table</label>
        <input name='id' type="text" className="form-control" value={formik.values.id} onChange={formik.handleChange} onBlur={formik.handleBlur} readOnly={params.id}/>
        {
          formik.errors.id && formik.touched.id && (
            <small className='text-danger'>{formik.errors.id}</small>
          )
        }
      </div>
      <div className="mb-3">
        <label htmlFor="passcode" className="form-label" >Nomor</label>
        <input name='nomor' type="text" className="form-control" value={formik.values.nomor} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {
          formik.errors.nomor && formik.touched.nomor && (
            <small className='text-danger'>{formik.errors.nomor}</small>
          )
        }
      </div>
      <div className="mb-3">
            <label htmlFor="status">Choose a status:</label>

            <select id="status" name='status' onChange={formik.handleChange} defaultValue="Available">
                <option value="volvo">Available</option>
                <option value="saab">Unavailable</option>
            </select>
      </div>
      <button type="submit" className="btn btn-primary" disabled={!submitButton}>Submit</button>
      <button type="button" className="btn btn-primary" onClick={()=> navigate('..')}>Cancel</button>
    </form>
    </div>
    }
    </div>
  )
}

export default TableForm;
