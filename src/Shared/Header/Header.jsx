// import React from 'react';
import moment from 'moment';
import logo from '../../assets/logo.png'
import Marquee from 'react-fast-marquee';
import { Button, Container } from 'react-bootstrap';
// import SignUp from '../SignUp/SignUp';
// import Login from '../Login/Login';
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
            
        </Container>
    );
};

export default Header;