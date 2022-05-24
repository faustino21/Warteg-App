import React, { useState } from 'react'
import TableAction from '../../redux/table/tableAction'
import { connect } from 'react-redux'

const ListMeja = (props) => {
  const [table, setTable] = useState(this.props.tables)
  return(
    <>
      <button type="button" className="btn btn-primary m-3" onClick={()=>this.handleAddForm(true)}>Add Menu</button>
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
              table.map((data, i) => {
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
  )
}

const mapStateToProps = (state) => {
  return {
     tables : state.table.tables
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTable : (data) => dispatch({
      type : TableAction.ADD_TABLE,
      addTable : data
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMeja);