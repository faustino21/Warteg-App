import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { LoadingScreen } from '../../../layout/loadingScreen'

export const MenuList = ({bloc}) => {
  
  const {
    menuList,
    getAllMenu,
    handleDelete,
    handleAdd,
    handleUpdate
  } = bloc ()

  const {list} = menuList

  const loading = useSelector(state => state.global)
  // const navigate = useNavigate()
  
  useEffect(()=>{
    getAllMenu()
  }, [])

    return (
    <div>
        {
            loading.isLoading ? <LoadingScreen/> :
            <>
              <button className='btn btn-primary' onClick={()=>handleAdd()}> Add Menus</button>
                <h2>Menu's List</h2>
                <table className='table table-stipped'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                list.map((data, i) => {
                                return(
                                    <tr key={data.id}>
                                        <td>{(i + 1)}</td>
                                        <td>{data.name}</td>
                                        <td>{data.price}</td>
                                        <td>
                                            <button type='button' className='btn btn-warning' onClick={()=>handleUpdate(data.id)}>Update</button>
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
