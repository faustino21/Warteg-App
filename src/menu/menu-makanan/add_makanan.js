import React, { Component } from 'react'

export default class AddMakanan extends Component {
  render() {
    return (
        <>        
        <form className='d-flex flex-column justify-content-center text-center' onSubmit={this.handlerSubmit}>
            <h1 className='fs-3 fw-6'>ADD MENU</h1>
            <div className='m-2'>
                <input name='todo' type='text' className="form-control" placeholder="Id" onChange={this.handlerToDo}  required/>   
            </div>
            <div className='m-2 justify-self-start'>
                <input name='desc' className="form-control" type='text' placeholder="Name"  onChange={this.handlerDesc} required/>
            </div>
            <div className='m-2 justify-self-start'>
                <input name='desc' className="form-control" type='number' placeholder="Price"  onChange={this.handlerDesc} required/>
            </div>
            <div className='row'>
            <button type='button' className='btn btn-primary mx-2 my-1' style={{width: "20%"}} onClick={this.handlerCancel}>CANCEL</button>
            <button type='submit' className='btn btn-primary mx-2 my-1' style={{width: "20%"}}>Submit</button>    
            </div>             
        </form>
        </>
    )
  }
}
