// import Home from "../pages/Home/Home/Home";

import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import LeftNav from "../Shared/LeftNav/LeftNav";
import RightNav from "../Shared/RightNav/RightNav";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>

                    <Col lg={6}>1 of 2</Col>

                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>

        </div>
    );
};

export default Main;