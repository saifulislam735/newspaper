// import Home from "../pages/Home/Home/Home";

import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import RightNav from "../Shared/RightNav/RightNav";
// import News from "../pages/Home/News/News";
import { Outlet } from "react-router-dom";

const FullNews = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}>
                        {/* <News></News> */}
                        <Outlet></Outlet>
                    </Col>

                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>

        </div>
    );
};

export default FullNews;