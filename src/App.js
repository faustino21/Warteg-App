import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { connect } from 'react-redux';
import Login from './login/login';
import Navbar from './navbar/navbar';
import "./style/style.css";

class App extends Component {
  render(){
    return (
      <>
      {
        this.props.isLogin ? <Navbar/> : <Login/>
      }
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    isLogin : state.auth.isLogin
  }
}

export default connect(mapStateToProps)(App);
