import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionType from '../../redux/globalAction'
import AddMakanan from './add_makanan'

class ListMakanan extends Component {
  
  handleAddForm = (data) => {
    this.props.addForm(data)
  }

  render() {
    console.log("ini di render", this.props);
    return (
      <>
      {
        this.props.navAddForm ? <AddMakanan/> :
        <>
        <button type="button" className="btn btn-primary m-3" onClick={()=>this.handleAddForm(true)}>Add Menu</button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.food.map((data, i) => {
                return(
                <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{data.name}</td>
                    <td>{data.price}</td>
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
}

const mapStateToProps = (state) => {
  console.log("ini map state props", state);
  return {
      food : state.global.foods,
      navAddForm : state.global.addFormMenu
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      addForm : (data) => dispatch({
        type : ActionType.NAV_FORM_MENU,
        setAddForm : data        
      })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMakanan)