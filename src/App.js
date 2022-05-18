import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Header from './component/header/header';
import Login from './login/login';
import "./style/style.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      val : false,
    }
  }

  getVal = (valParam) =>{
    this.setState({
      val : valParam
    })
  }

  logged = () => {
    let x
    if (!this.state.val) {
      console.log(1);
      x = <Login validate={this.getVal}/>
    } else {
      x = <Header validate={this.getVal}/>
    }
    return x
  }

  render(){
    return this.logged()
  }
}

export default App;
