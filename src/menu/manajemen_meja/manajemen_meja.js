import { connect } from 'react-redux'
import TableAction from '../../redux/table/tableAction'
import TableForm from './tableForm'


const ListMeja = (props) => {

  return(
    <>
    {
      props.addFormTable ? <TableForm/> : 
      <>
      <button type="button" className="btn btn-primary m-3" onClick={()=>props.toForm(true)}>Add Menu</button>
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
              props.tables.map((data, i) => {
                return(
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{data.table}</td>
                  <td>{data.status}</td>
                  <td>
                  <button type='button' className='btn btn-danger'>Remove</button>
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

const mapStateToProps = (state) => {
  return {
     tables : state.table.tables,
     addFormTable : state.table.addFormTable
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toForm : (data) => dispatch({
      type : TableAction.NAV_TO_FORM,
      payload : data
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMeja);