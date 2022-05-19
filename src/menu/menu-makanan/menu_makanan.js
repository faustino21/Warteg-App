import React, { Component } from 'react'
import { Navbar, Container, Form, Button} from "react-bootstrap";
import AddMakanan from './add_makanan';

export default class MenuMakanan extends Component {
  
  constructor(){
    super()
    this.state = {
      num : 0
    }
  }

  logout = ()=>{
    this.props.validate(0)
  }

  setNum = (value) => {
    this.setState({
      num : value
    })
  }

  removeMakanan = (ev) => {
    console.log(ev.target.name);
    this.props.hapusMakanan(ev.target.name)
  }

  updateFormMakanan = (kunci, value) => {
    console.log("ini dari menu_makanan", kunci, value);
    this.props.updateMakanan(kunci, value)
  }

  daftarMakanan = () => {
    this.props.daftarMakanan()
  }

  nav(){
    if(this.state.num === 0){
      return (
        <div className='body-menu-makanan' style={{height: "auto", width:"100vw"}}>
          <Navbar bg="light" expand="lg" sticky="top" className='justify-content-between'>
            <Container fluid className='justify-content-between'>
              <Navbar.Brand href="#"><i className='bi-house-door-fill fs-1' style={{width:"100px", height:"100px"}}></i></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Form className="d-flex">
                  <Button variant="outline-success" onClick={()=>this.setNum(1)}>+</Button>
                  <Button variant="outline-success" onClick={()=>this.logout()}>Log out</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div className='d-flex justify-content-center align-items-center'>
              <div className='row justify-content-start'>
                {this.props.makanan.map((data) => {
                  return (
                    <div className="card col-4" style={{width: "18rem", margin:"20px"}}>
                      {/* <img src="..." className="card-img-top" alt="..."/> */}
                      <div className='card-img-top align-self-center' style={{height:"200px", width:"100%", backgroundColor:"black"}}></div>
                      <div className="card-body">
                        <h5 className="card-title">{data.nama}</h5>
                        <p className="card-text">{data.harga}</p>
                        <div>
                            <a href="#" className="btn btn-primary" name={data.nama} onClick={this.removeMakanan}>Remove</a>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
          </div>
          
        </div>
      )
    } else {
       return <AddMakanan validate={this.logout} daftarMakanan={this.daftarMakanan} updateMakanan={this.updateFormMakanan} makanan={this.props.makanan} hapusMakanan={this.props.hapusMakanan}/>
    }
  }



  render(){
    return this.nav()
  }
}
