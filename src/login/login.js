import React, { Component } from 'react'
import { Form } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default class Login extends Component {
  login = ()=>{
      let valParam = false
      const username = document.getElementById('uname').value
      const password = document.getElementById('password').value

      if ( username === "admin" && password === "1234"){ 
        console.log(username)  
        valParam = true
      } else {
          let x = this.props.number + 1
          this.props.setNumber(x)
          return
      }

      this.props.validate(valParam)
  }

  render() {
    return (
      <div className='container1 row justify-content-center align-items-center'>
          <div className='container2 col-md-12 row justify-content-md-center'>
                <div className='logo col-md-12 row justify-content-md-center align-items-md-center'>
                    <h1 className='fs-1 text-center text-light'>TOKESHOP</h1>
                </div>
                <div className='title col-md-6 d-flex flex-column justify-content-md-center align-items-start p-5 my-2'>
                    <h2 className=''>Login</h2>
                    <p>By logging in you agree to the ridiculously long terms that you didn't bother to read</p>
                </div>
                <Form className='col-md-6 d-flex flex-column justify-content-center p-5 shadow rounded' onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" id='uname'/>
                        <Form.Text className="text-muted">
                        We'll never share your identity with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" id='password'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <p className="my-3 text-danger" hidden={this.props.number === 0}>
                        * Invalid login, please try again
                    </p>
                    <Link to="/home"className="buttonSub btn btn-lg"onClick={()=>this.login()}>Submit</Link>
                </Form>
            
          </div>
      </div>
    )
  }
}
