// import React from 'react';
import moment from 'moment';
import logo from '../../assets/logo.png'
import Marquee from 'react-fast-marquee';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaCircleUser } from 'react-icons/fa6';
const Header = () => {
    return (
        <Container>
            <div className='text-center mt-4'>
                <img src={logo} alt="" />
                <div style={{ color: ' #706F6F', fontSize: '18px', margin: '5px' }}>
                    <p>Journalism Without Fear or Favour</p>
                    <p ><span style={{ color: '#403F3F' }}>{moment().format("dddd,")}</span>{moment().format("MMMM Do ,YYYY")}</p>
                </div>
            </div>
            <div className='d-flex bg-secondary p-2 bg-opacity-25 ' >
                <Button variant="danger">Danger</Button>{' '}
                <Marquee>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                        <Nav className="mx-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/">About</Nav.Link>
                            <Nav.Link href="/">Career</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto d-flex align-items-centers justify-content-center gap-2">
                            <Nav href="#profile">
                                <FaCircleUser style={{ height: '40px', width: '40px' }} />
                            </Nav>
                            <Button style={{ height: '40px' }} className='px-4' variant="secondary" href="#login">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;