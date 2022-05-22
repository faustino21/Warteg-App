import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListMeja from '../menu/manajemen_meja/manajemen_meja'
import ListMakanan from '../menu/menu-makanan/menu_makanan'
import ActionType from '../redux/globalAction'
import Home from './home'

class Navbar extends Component {

    handlerNavbar = (data) => {
        this.props.setNav(data)
    } 

    handlerLogout = (data) => {
        this.props.logout(data)
    }

  render() {
      let showMenu
      if (this.props.nav === ''){
          showMenu = <Home/>
      } else if (this.props.nav === 'menus'){
          showMenu =  <ListMakanan/>
      } else if (this.props.nav === 'tables'){
          showMenu = <ListMeja/>
      }
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <div className="container-fluid">
         <a className="navbar-brand" href="#">Bakari</a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNav">
           <ul className="navbar-nav">
             <li className="nav-item">
               <a className="nav-link active" aria-current="page" style={{cursor:"pointer"}} onClick={()=> this.handlerNavbar('')}>Home</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" style={{cursor:"pointer"}} onClick={() => this.handlerNavbar('menus')}>Menus</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" style={{cursor:"pointer"}} onClick={() => this.handlerNavbar('tables')}>Tables</a>
             </li>
             <li className="nav-item">
               <button  type="button" className="btn btn-danger" onClick={() => this.handlerLogout(false)}>Logout</button>
             </li>
           </ul>
         </div>
       </div>
     </nav>
       {showMenu}
       </>
    )
  }
}

const mapStateToProps = (state) => {
    return{
        nav : state.nav
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setNav : (data) => dispatch({
            type : ActionType.SET_NAV,
            setNav : data
        }) ,

        logout : (data) => dispatch({
            type : ActionType.LOGOUT,
            isLogin : data
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);