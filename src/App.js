import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/header/header';
import Login from './login/login';
import "./style/style.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      val : false,
      num : 0
    }
  }

  getNumber = (number) => {
    this.setState({
      num : number
    })
  }

  getVal = (valParam) =>{
    this.setState({
      val : valParam
    })
  }
  
  render(){
    return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login validate={this.getVal} number={this.state.num} setNumber={this.setNumber}/>}/>
          <Route path="/home" element={this.state.val ? <Header/> : <Login validate={this.getVal}/>}/>
        </Routes>
      </BrowserRouter>
      </>
    );
  }
}

export default App;
