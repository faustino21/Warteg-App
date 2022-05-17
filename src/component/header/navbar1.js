import React, { Component } from 'react'
import "bootstrap"

export default class Navbar1 extends Component {
  render() {
    return (
      <nav className='nav1 d-md-flex justify-content-md-end'>
        <div className='p-3'>
          <a href='#'>
            <i class="bi-arrow-left-right mx-1"></i>
            <span>Comparison</span>
          </a>
        </div>
        <div className='p-3'>
          <a href='#'>
            <i class="bi-bookmark mx-1"></i>
            <span>Notepad</span>
          </a>
        </div>
        <div className='p-3'>
          <a href='#'>
            <i class="bi-envelope mx-1"></i>
            <span>Contact</span>
          </a>
        </div>
      </nav>
    )
  }
}
