import React, { Component } from 'react'
import ManajemenMeja from './manajemen_meja/manajemen_meja'
import MenuMakanan from './menu-makanan/menu_makanan'

export default class Menu extends Component {
    constructor(){
        super()
        this.state = {
            nav : 0,
            makanan : [
                {id : 1, nama : "Telor Ceplok", harga : 4000},
                {id : 2, nama : "Orek Tempe", harga : 3000},
                {id : 3, nama : "Sayur Soup", harga : 3000},
                {id : 4, nama : "Es Teh Manis", harga : 4000},
                {id : 5, nama : "Kentang Goreng", harga : 3000},
                {id : 6, nama : "Ayam Bakar", harga : 12000},
                {id : 7, nama : "Ayam Goreng", harga : 10000},

            ],
            formMakanan : {
                id : 0,
                nama : '',
                harga : 0
            },

            meja : [
              {id : 123, nomor: 23, status : "available"},
              {id : 123, nomor: 23, status : "available"},
              {id : 123, nomor: 23, status : "available"},
              {id : 123, nomor: 23, status : "available"}
            ],

            formMeja : {
              id : 0,
              nomor : 0,
              status : "available"
            }
        }
    }
    
    logout = ()=>{
        this.props.validate(0)
    }

    //main menu
    setNav = (value) =>{
        this.setState({
            nav : value
        })
    }

    removeMeja = (value) => {
        let list = this.state.meja
        let index = this.state.meja.findIndex((x)=> x.nomor === value)
        list.splice(index, 1)
        this.setState({
            meja : list
        })
    }

    daftarMeja = () => {
      const list = this.state.meja
      list.push(this.state.formMeja)
      console.log(this.state.formMeja);
      this.setState({
        meja : list
      })
   }

   updateFormMeja = (kunci, value) =>{
    if (kunci == 'id'){
      console.log("ini dari menu", value);
      this.setState({
        formMeja : {...this.state.formMeja, id : value}
      })
    } else if (kunci == 'nama'){
      console.log("ini dari menu", value);
      this.setState({
        formMeja : {...this.state.formMeja, nomor : value}
      })
    } else if (kunci == 'harga'){
      console.log("ini dari menu", value);
      this.setState({
        formMeja : {...this.state.formMeja, status : value}
      })
    }
  }


    removeMakanan = (value) => {
        let list = this.state.makanan
        let index = this.state.makanan.findIndex((x)=> x.nama === value)
        list.splice(index, 1)
        this.setState({
            makanan : list
        })
    }

    daftarMakanan = () => {
        const list = this.state.makanan
        list.push(this.state.formMakanan)
        console.log(this.state.formMakanan);
        this.setState({
          makanan : list
        })
     }

     updateFormMakanan = (kunci, value) =>{
        if (kunci == 'id'){
          console.log("ini dari menu", value);
          this.setState({
            formMakanan : {...this.state.formMakanan, id : value}
          })
        } else if (kunci == 'nama'){
          console.log("ini dari menu", value);
          this.setState({
            formMakanan : {...this.state.formMakanan, nama : value}
          })
        } else if (kunci == 'harga'){
          console.log("ini dari menu", value);
          this.setState({
            formMakanan : {...this.state.formMakanan, harga : value}
          })
        }
      }

    menu(){
        let x
        if(this.state.nav === 0){
            x =(
            <div className="menu-body d-flex flex-column justify-content-center align-items-center " style={{height:"100vh", width:"100vw"}}>
                <h1 className=''>MAIN MENU</h1>
                <div className='wrapper-menu container-sm d-flex flex-column justify-content-evenly align-items-center shadow-lg' style={{height:"60%", width:"60%"}} >
                    <button type="button" className="menu-button btn btn-lg m-6 fs-2 shadow" onClick={()=>this.setNav(1)}>Menu Makanan</button>
                    <button type="button" className="menu-button btn btn-lg m-6 fs-2 shadow" onClick={()=>this.setNav(2)}>Manajemen Table</button>
                    <button type="button" className="menu-button btn btn-lg m-6 fs-2 shadow" onClick={()=>this.logout()}>Logout</button>
                </div>
            </div>
            )
        } else if (this.state.nav === 1){
            x = <MenuMakanan validate={this.logout} makanan={this.state.makanan} hapusMakanan={this.removeMakanan} daftarMakanan={this.daftarMakanan} updateMakanan={this.updateFormMakanan}/>
        } else {
           x = <ManajemenMeja validate={this.logout} emja={this.state.meja} hapusMeja={this.removeMeja} daftarMeja={this.daftarMeja} updateMeja={this.updateFormMeja}/>
        }
        return x
    }


  render() {
    return this.menu()
  }
}
