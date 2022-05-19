import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Header from './component/header/header';
import Login from './login/login';
import Menu from './menu/menu';
import SignUp from './signup/signup';
import "./style/style.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      val : 0,
      data : [],
      form : {
        email : '',
        username : '',
        password : ''
      },
    }
  }

  daftar = () => {
     const list = this.state.data
     list.push(this.state.form)
     this.setState({
       data : list
     })
  }

  updateForm = (kunci, value) =>{
    if (kunci === 'email'){
      this.setState({
        form : {...this.state.form, email : value}
      })
    } else if (kunci === 'username'){
      this.setState({
        form : {...this.state.form, username : value}
      })
    } else if (kunci === 'password'){
      this.setState({
        form : {...this.state.form, password : value}
      })
    }
  }

  getVal = (valParam) =>{
    this.setState({
      val : valParam
    })
  }

  logged = () => {
    let x
    if (this.state.val === 0) {
      x = <Login validate={this.getVal} data={this.state.data}/>
    } else if(this.state.val === 1) {
      x = <SignUp signUp={this.daftar} change={this.updateForm}/>
    } else {
      x = <Menu validate={this.getVal}/>
    }
    return x
  }

  render(){
    return this.logged()
  }
}

export default App;
