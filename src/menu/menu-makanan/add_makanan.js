import React, { Component } from 'react'
import { connect } from 'react-redux'
import MenuAction from '../../redux/menus/menuAction'

class AddMakanan extends Component {

    constructor(){
        super()
        this.state = {
            id : '',
            name : '',
            price : ''
        }

    }

    handlerId = (e) => {
        this.setState({
            id : e.target.value
        })
    }
    handlerName = (e) => {
        this.setState({
            name : e.target.value
        })
    }
    handlerPrice = (e) => {
        this.setState({
            price : "Rp " + e.target.value
        })
    }
    
    handlerSubmit = (e) => {
        console.log("ini submit");
        this.props.submit(this.state)
        this.handlerCancel()
        e.preventDefault()
    }

    handlerCancel = () => {
        this.props.cancel(false)
    }

  render() {
    return (
        <>        
        <form className='d-flex flex-column justify-content-center text-center' onSubmit={this.handlerSubmit}>
            <h1 className='fs-3 fw-6'>ADD MENU</h1>
            <div className='m-2'>
                <input name='id' type='text' className="form-control" placeholder="Id" onChange={this.handlerId}  required/>   
            </div>
            <div className='m-2 justify-self-start'>
                <input name='name' className="form-control" type='text' placeholder="Name"  onChange={this.handlerName} required/>
            </div>
            <div className='m-2 justify-self-start'>
                <input name='price' className="form-control" type='number' placeholder="Price"  onChange={this.handlerPrice} required/>
            </div>
            <div className='row'>
            <button type='button' className='btn btn-primary mx-2 my-1' style={{width: "15%"}} onClick={this.handlerCancel}>Cancel</button>
            <button type='submit' className='btn btn-primary mx-2 my-1' style={{width: "15%"}}>Submit</button>    
            </div>             
        </form>
        </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return{
        submit : (data) => dispatch({
            type : MenuAction.ADD_MENUS,
            addMenus : data
        }),
        cancel : (data) => dispatch({
            type : MenuAction.NAV_FORM_MENU,
            setAddForm : data        
          })
    }
}

export default connect(null, mapDispatchToProps)(AddMakanan)