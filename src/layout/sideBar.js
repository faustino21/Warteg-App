import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import GlobalAction from "../redux/globalReducer/globalAction";

const Sidebar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logout = () => {
        sessionStorage.removeItem("token")
        navigate("/")
        dispatch({type : GlobalAction.IS_LOADING, loading : false})
    }

    return (
        <>
        <Nav variant="pills" defaultActiveKey="home" className="flex-column">
            <Nav.Item>
                <Nav.Link eventKey="home" onClick={()=> navigate("/protected")}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="menus" onClick={()=> navigate("menus")}>Menus</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="tables" onClick={()=> navigate("tables")}>Table</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="customer" onClick={()=> navigate("customers")}>Customer</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={()=>logout()} style={{cursor:"pointer"}}>Logout</Nav.Link>
            </Nav.Item>
        </Nav>
        </>
    )
}

export default Sidebar;