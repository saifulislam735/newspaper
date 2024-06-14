// import React from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from "react-bootstrap";

import { useContext } from 'react';
import { AuthContext } from '../../pages/Provider/AuthProvider';

const NavigationBar = () => {

    const { user, logout } = useContext(AuthContext)
    // console.log(user)
    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                        <Nav className="mx-auto">
                            <Link style={{ textDecoration: 'none', marginRight: '20px' }} to="/catagories/0">Home</Link>
                            <Link style={{ textDecoration: 'none', marginRight: '20px' }} to="/about">About</Link>
                            <Link style={{ textDecoration: 'none', marginRight: '20px' }} to="/career">Career</Link>
                        </Nav>
                        <Nav className="ml-auto d-flex align-items-centers justify-content-center gap-2">
                            <Nav to="/profile">
                                <div
                                    className='m-0 pt-2 me-2' >
                                    {user ? <span>{user.displayName || user.email}</span> : ''}
                                </div>
                                <p>
                                    <FaCircleUser style={{ height: '40px', width: '40px' }} />
                                </p>
                            </Nav>
                            <Button style={{ height: '40px' }} className='px-4' variant="secondary" >
                                {user ?
                                    <Link to={'catagories/0'} onClick={logout} style={{ textDecoration: 'none', color: 'white' }} >Logout</Link>
                                    :
                                    <Link style={{ textDecoration: 'none', color: 'white' }} to={'/login'}>Login</Link>
                                }
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;