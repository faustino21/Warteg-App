import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LoadingScreen } from '../../../layout/loadingScreen'

export const TableList = ({bloc}) => {
  
  const {
    tableList,
    getAllTable,
    handleDelete
  } = bloc ()

  const loading = useSelector(state => state.global)
  const navigate = useNavigate()
  
  useEffect(()=>{
    getAllTable()
  }, [])

    return (
    <div>
        {
            loading.isLoading ? <LoadingScreen/> :
            <>
              <button className='btn btn-primary' onClick={()=>navigate('form')}> Add Table</button>
                <h2>Tables's List</h2>
                <table className='table table-stipped'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nomor</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                tableList.map((data, i) => {
                                return(
                                    <tr key={data.id}>
                                        <td>{(i + 1)}</td>
                                        <td>{data.nomor}</td>
                                        <td style={{color : data.status === "Available"? "blue" : "yellow"}}>{data.status}</td>
                                        <td>
                                            <button type='button' className='btn btn-warning' onClick={()=>navigate(`form/${data.id}`)}>Update</button>
                                            <button type='button' className='btn btn-danger' onClick={() => handleDelete(data)}>Delete</button>
                                        </td>

                                    </tr>
                                )})
                            }
                    </tbody>
                </table>
            </>
        }
    </div>
  )
}
