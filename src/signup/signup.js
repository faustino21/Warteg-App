import React, { Component } from 'react'

export default class SignUp extends Component {

    handlerSubmit = () => {
        this.props.signUp()
    }

    handlerChange = (ev) => {
        this.props.change(ev.target.name, ev.target.value)
    }

  render() {
    return (
      <div className='sign-body d-flex justify-content-center align-items-center'>
          <div className='cons row'>
            
            <div className='sign-up-greet col-6 d-flex flex-column justify-content-center'>
                <div className='wrapper-hello'>
                    <h1 className='text-light'>Hello</h1>
                    <p className='text-light'>Just let us know yourself and let's have fun with us</p>
                </div>
            </div>

            <div className='sign-up-form col-6 p-4'>
                <div className='containerForm'>
                    <form className='d-flex flex-column justify-content-center text-center'>
                        <h1 className='fs-3 fw-6'>Create Account</h1>
                        <div className='email m-2'>
                            {/* <i className='bi-envelope m-2'></i> */}
                            <input name='email' type={"email"} className="form-control" placeholder="Email" onChange={this.handlerChange} required/>   
                        </div>
                        <div className='username m-2 justify-self-start'>
                            {/* <i className='bi-person-fill m-2'></i> */}
                            <input name='username' className="form-control" type={"text"} placeholder="Username" onChange={this.handlerChange} required/>
                        </div>
                        <div className='password m-2'>
                            {/* <i className='bi-lock-fill m-2'></i> */}
                            <input name='password' className="form-control" type={"password"} placeholder="Password" onChange={this.handlerChange} required/>
                        </div>
                        <button type='button' className='btn btn-primary align-self-center my-2' style={{width: "40%"}} onClick={()=>this.handlerSubmit()}>Sign Up</button>
                        <div className='social-login d-flex flex-row justify-content-center my-2'>
                            <a href='#'><i className='bi-google mx-2'></i></a>
                            <a href='#'><i className='bi-facebook mx-2'></i></a>
                            <a href='#'><i className='bi-linkedin mx-2'></i></a>
                        </div>
                        <a href='#'>Sign in</a>
                    </form>
                    {/* {this.props.data.map((akun, i) => <p key={i}>{akun.email}</p>)} */}

                </div>
            </div>

          </div>
      </div>
    )
  }
}
