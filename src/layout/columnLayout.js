import { Col, Row } from "reactstrap"
import AppRouters from "../routes/appRouter";
import Header from "./header"
import Sidebar from "./sideBar";

const ColumnLayout = () => {
    return(
        <>
        <Row>
            <Col sm='12' className="p-0">
                <Header/>
            </Col>
        </Row>
        <Row>
            <Col sm='4' md='3' lg='2' className="d-none d-sm-block">
                <Sidebar/>
            </Col>
            <Col sm='8' md='9' lg='10'>
                <AppRouters/>
            </Col>
        </Row>
        </>
    )
}

export default ColumnLayout;