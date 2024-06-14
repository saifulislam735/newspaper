import { Container } from "react-bootstrap";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";


const NavigationLayout = () => {

    return (
        <Container>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </Container>
    );
};

export default NavigationLayout;