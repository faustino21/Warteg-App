import { useDispatch, useSelector } from 'react-redux'
import TableAction from '../../redux/table/tableAction'
import TableForm from './tableForm'


const ListMeja = () => {
  
  const table = useSelector(state => state.table)
  const dispatch = useDispatch();

  const toForm = () => {
    dispatch({type : TableAction.NAV_TO_FORM, payload : true})
  }

  const removeTable = (e) => {
      dispatch({type : TableAction.REMOVE_TABLE, payload : e.target.name})
  }

  console.log("ini data table: ", table);

  return(
    <>
      {
      table.addFormTable ? <TableForm/> : 
      <>
      <button type="button" className="btn btn-primary m-3" onClick={toForm}>Add Menu</button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Table</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {
              table.tables.map((data, i) => {
                return(
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{data.table}</td>
                  <td className={data.status ? 'text-success' : 'text-danger'}>{data.status? "Available" : "Unavailable"}</td>
                  <td>
                  <button type='button' className='btn btn-danger' name={data.id} onClick={removeTable}>Remove</button>
                  </td>
              </tr>
            )})
          }
        </tbody>
      </table>
      </>

    }
    </>
  )
}


export default ListMeja;