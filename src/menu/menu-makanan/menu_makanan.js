import React, { Component } from 'react'
import { connect } from 'react-redux'
import MenuAction from '../../redux/menus/menuAction'
import AddMakanan from './add_makanan'

class ListMakanan extends Component {
  
  handleAddForm = (data) => {
    this.props.addForm(data)
  }

  handleRemove = (e) => {
    this.props.remove(e.target.name)
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
                    <button type='button' className='btn btn-danger' name={data.id} onClick={this.handleRemove}>Remove</button>
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
      food : state.menu.foods,
      navAddForm : state.menu.addFormMenu
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      addForm : (data) => dispatch({
        type : MenuAction.NAV_FORM_MENU,
        setAddForm : data        
      }),
      remove : (data) => dispatch({
        type : MenuAction.REMOVE_MENUS,
        foods : data
      })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMakanan)