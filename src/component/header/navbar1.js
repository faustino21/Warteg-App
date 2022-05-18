import React, { Component } from 'react'
import "bootstrap"

export default class Navbar1 extends Component {
  
  logout = ()=>{
    this.props.validate(false)
  }
  
  render() {
    return (
      <nav className='nav1 d-md-flex justify-content-md-end'>
        <div className='p-3'>
          <a href='#'>
            <i className="bi-arrow-left-right mx-1 text-dark"></i>
            <span className='text-dark'>Comparison</span>
          </a>
        </div>
        <div className='p-3'>
          <a href='#'>
            <i className="bi-bookmark mx-1 text-dark"></i>
            <span className='text-dark'>Notepad</span>
          </a>
        </div>
        <div className='p-3 text-dark'>
          <a href="" onClick={()=>this.logout()}>
            <span className='text-dark'>logout</span>
            <i className="bi bi-box-arrow-right text-dark mx-2"></i>
          </a>
        </div>
      </nav>
    )
  }
}
