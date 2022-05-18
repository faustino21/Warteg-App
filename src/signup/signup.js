import React, { Component } from 'react'

export default class SignUp extends Component {

    handlerSubmit = () => {
        console.log("ini update");
        this.props.signUp()
    }

    handlerChange = (ev) => {
        console.log(ev)
        this.props.change(ev.target.name, ev.target.value)
    }

  render() {
    return (
      <div className='signBody d-flex justify-content-center align-items-center'>
          <div className='cons'>
            
            <div className='signUpGreet'>
                <div>
                    <h1>Hello</h1>
                    <p>Just let us know yoursefl and let's have fun with us</p>
                </div>
            </div>

            <div className='signUpForm'>
                <div className='containerForm'>
                    <form>
                        <h1>Create Account</h1>
                        <div className='email'>
                            <i className='bi-envelope'></i>
                            <input name='email' type={"email"} placeholder="Email" onChange={this.handlerChange} required/>   
                        </div>
                        <div className='username'>
                            <i className='bi-person-fill'></i>
                            <input name='username' type={"text"} placeholder="Username" onChange={this.handlerChange} required/>
                        </div>
                        <div className='password'>
                            <i className='bi-lock-fill'></i>
                            <input name='password' type={"password"} placeholder="Password" onChange={this.handlerChange} required/>
                        </div>
                        <button type='button' className='btn btn-primary' onClick={()=>this.handlerSubmit()}>Sign Up</button>
                        <div className='social-login'>
                            <a href='#'><i className='bi-google'></i></a>
                            <a href='#'><i className='bi-facebook'></i></a>
                            <a href='#'><i className='bi-linkedin'></i></a>
                        </div>
                    </form>
                    <p>{this.props.form['username']}</p>
                    <p>{this.props.form['email']}</p>
                    <p>{this.props.form['password']}</p>
                    {this.props.data.map((akun, i) => <p key={i}>{akun.email}</p>)}

                </div>
            </div>

          </div>
      </div>
    )
  }
}
