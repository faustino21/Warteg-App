import React, { Component } from 'react'

export default class Navbar2 extends Component {
  render() {
    return (
      <div className='nav2 row'>
          <div className='col-4'>
            <div><a>Bathroom</a></div>
            <div><a>Kitchen</a></div>
            <div><a>Service</a></div>
          </div>
          <div className='col-4'>
              <div>
                    <a>
                       <img src='../../asset/logo-zara-transparent-background-PNG.png'/>
                    </a>
              </div>
          </div>
          <div className='col-4'>
              <input/>
              <a></a>
          </div>
      </div>
    )
  }
}
