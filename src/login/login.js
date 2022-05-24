import React, { Component } from 'react'
import { Form } from "react-bootstrap";
import { connect } from 'react-redux';
import AuthAction from '../redux/auth/authAction';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            num : 0,
            email : '',
            password: ''
        }
    }

    handleChangeEmail = (e) => {
        this.setState({
            email : e.target.value
        })
    }

    handleChangePassword = (e) => {
        this.setState({
            password : e.target.value
        })
    }

    handleSubmit = ()=>{
        this.props.user.forEach(e => {
            if (e['email'] === this.state.email && e['password'] === this.state.password){
                this.login()
            }
        });
    }

    login = () => {
        this.props.isLogin(true)
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
                        <Form.Control type="text" placeholder="Username" id='uname' onChange={this.handleChangeEmail}/>
                        <Form.Text className="text-muted">
                        We'll never share your identity with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" id='password' onChange={this.handleChangePassword}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <p className="my-3 text-danger">
                        *Invalid login, please try again
                    </p>
                    <button type="submit" className="buttonSub btn btn-lg">Login</button>
                </Form>
          </div>
      </div>
    )
  }
}

const mapstateToProps = (state) => {
    return {
        user : state.auth.user

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isLogin : (data) => dispatch({
            type : AuthAction.IS_LOGIN,
            payload : data
        })
    }
}

export default connect(mapstateToProps, mapDispatchToProps)(Login)