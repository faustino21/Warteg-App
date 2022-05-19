import React, { Component } from 'react'
import MenuMakanan from "./menu_makanan";

export default class AddMakanan extends Component {
    constructor(){
        super()
        this.state = {
          num : 0
        }
      }

      setNum = (value) => {
        this.setState({
          num : value
        })
      }


    handlerSubmit = () => {
        this.props.daftarMakanan()
    }

    handlerChange = (ev) => {
        console.log(ev.target.name);
        console.log(ev.target.value);
        this.props.updateMakanan(ev.target.name, ev.target.value)
    }

    logout(){
        this.props.validate()
    }


    nav = () => {
        if(this.state.num === 0){
            return (
                <div className='sign-up-form col-6 p-4'>
                <div className='containerForm'>
                    <form className='d-flex flex-column justify-content-center text-center'>
                        <h1 className='fs-3 fw-6'>Add Menu Makanan</h1>
                        <div className='email m-2'>
                            {/* <i className='bi-envelope m-2'></i> */}
                            <input name='id' type={'number'} className="form-control" placeholder="Id" onChange={this.handlerChange} required/>   
                        </div>
                        <div className='username m-2 justify-self-start'>
                            {/* <i className='bi-person-fill m-2'></i> */}
                            <input name='nama' className="form-control" type={'text'} placeholder="Name" onChange={this.handlerChange} required/>
                        </div>
                        <div className='password m-2'>
                            {/* <i className='bi-lock-fill m-2'></i> */}
                            <input name='harga' className="form-control" type={'number'} placeholder="Harga" onChange={this.handlerChange} required/>
                        </div>
                        <div className='row'>
                        <button type='button' className='btn btn-primary mx-2 my-1' style={{width: "20%"}} onClick={()=>this.handlerSubmit()}>Submit</button>
                        <button type='button' className='btn btn-outline-secondary mx-2 my-1' style={{width: "20%"}} onClick={()=>this.setNum(1)}>Cancel</button>    
                        </div>
                        <button type='button' className='btn btn-outline-secondary mx-2 my-1' style={{width: "10%"}} onClick={()=>this.logout()}>Logout</button>                
                    </form>
                    </div>
                </div>
            )
        } else {
            return <MenuMakanan validate={this.logout} daftarMakanan={this.handlerSubmit} updateMakanan={this.handlerChange} makanan={this.props.makanan} hapusMakanan={this.props.hapusMakanan}/>
        }
    }

  render() {
    return this.nav()
  }
}
