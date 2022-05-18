import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Header from './component/header/header';
import Login from './login/login';
import SignUp from './signup/signup';
import "./style/style.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      val : false,
      data : [0],
      form : {
        email : 'tinoaron21',
        username : 'efwfiw',
        password : '1234'
      },
      num : 0
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

  updateNumber = () => {
    this.setState({
      num : this.state.num + 1
    })
  }

  getVal = (valParam) =>{
    this.setState({
      val : valParam
    })
  }

  logged = () => {
    let x
    // if (!this.state.val) {
    //   console.log(1);
    //   x = <Login validate={this.getVal}/>
    // } else {
    //   x = <Header validate={this.getVal}/>
    // }
    x = (
    <>
    <SignUp signUp={this.daftar} change={this.updateForm} form={this.state.form} data={this.state.data}/>
    </>)
    return x
  }

  render(){
    return this.logged()
  }
}

export default App;
