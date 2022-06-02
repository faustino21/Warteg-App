import { Navbar, NavbarBrand } from "reactstrap"

const Header = () => {
    return (
        <Navbar dark color="primary" className="shadow mb-4">
            <NavbarBrand className="mr-auto"> Warung Makan Bakari </NavbarBrand>
        </Navbar>
    )
}

export default Header;