import React, { Component } from 'react'
import { Form } from "react-bootstrap";

export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            num : 0,
            email : '',
            password : '',
            button : 0,
            errEmail : 0,
            errPass : 0
        }
    }

    enableButton = ()=> {
        this.setState({
            button : 1
        })
    }

    increment = () =>{
        this.setState({
            num : this.state.num + 1
        })
    }

    handleChange = (ev)=>{
        
        if (ev.target.name === 'email'){
          if(ev.target.value.match(/^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            this.setState({
              email : ev.target.value,
              errEmail : 0
          })} else {
             this.setState({
                 errEmail : 1
             })
          }
        } else if (ev.target.name === 'password'){
            if(ev.target.value.length >= 6){
                this.setState({
                  password : ev.target.value,
                  errPass : 0
            })} else {
                this.setState({
                     errPass : 1
                })
            }
        }

        if (this.state.errEmail !== 0 && this.state.errPass !== 0){
            this.enableButton()
        }
    }
  
    login = ()=>{
      let valParam = 0  
      if ( this.state.email === "admin@example.com" && this.state.password === "12345678"){  
        valParam = 2
      } else {
          console.log("gagal login");
        this.increment()
      }
      this.props.validate(valParam)
  }

  render() {
    return (
      <div className='container1 row justify-content-center align-items-center'>
          <div className='container2 col-md-12 row justify-content-md-center'>
                <div className='logo col-md-12 row justify-content-md-center align-items-md-center'>
                    <h1 className='fs-1 text-center text-light'>Warung Makan Bakari</h1>
                </div>
                <div className='title col-md-6 d-flex flex-column justify-content-md-center align-items-start p-5 my-2'>
                    <h2 className=''>Login</h2>
                    <p>makan kerja pulang makan tidur bangun kerja pulang makan tidur bangun kek gitu ae trus ampe tua</p>
                </div>
                <Form className='col-md-6 d-flex flex-column justify-content-center p-5 shadow rounded'>
                    <Form.Group className="mb-3">
                        <Form.Label style={{color:"white"}}>Email</Form.Label>
                        <Form.Control type="text" placeholder="email" name='email' onChange={this.handleChange}/>
                        <Form.Text className="text-danger" hidden={!this.state.errEmail}>
                        invalid email format
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label style={{color:"white"}}>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' onChange={this.handleChange}/>
                         <Form.Text className="text-danger" hidden={!this.state.errPass}>
                        6 min length character
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <p className="my-3 text-danger" hidden={this.state.num === 0}>
                        * incorrect login username or password
                    </p>
                    <button type="button" className="buttonSub btn btn-lg" onClick={()=>this.login()} disabled={!(this.state.errEmail === 0 || this.state.errPass === 0)}>Login</button>
                </Form>
          </div>
      </div>
    )
  }
}
