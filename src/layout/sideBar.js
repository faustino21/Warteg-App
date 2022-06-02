import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import GlobalAction from "../redux/globalReducer/globalAction";
import client from "../shared/httpClient/client";

const Sidebar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logout = async () => {

        try {
            const response = await verifyLogout()
            console.log("Logout Response : ", response);
            sessionStorage.removeItem("token")
            navigate("/")
            dispatch({type : GlobalAction.IS_LOADING, loading : false})
        } catch (error) {
            console.error(error);
            swal({
                title: "Logout Failed",
                text: "something wrong with your internet",
                icon: "error",
                button: "Retry",
            });
        }
    }

    const verifyLogout = async () => {
        const response = await client.post('/api/auth/logout')
        return response
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