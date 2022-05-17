import React, { Component } from 'react'
import Navbar1 from './navbar1'
import Navbar2 from './navbar2'

export default class Header extends Component {
  render() {
    return (
      <div className='header '>
          <Navbar1/>
          <Navbar2/>
      </div>
    )
  }
}
