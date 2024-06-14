// import React from 'react';
// import { getAuth } from 'firebase/auth';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import app from '../../firebase/firebase.config';

const Login = () => {
    // const auth = getAuth(app);



    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Row className="w-100">
                <Col md={{ span: 6, offset: 3 }}>
                    <div className="border p-4 shadow-sm rounded">
                        <h2 className="text-center mb-4">Login in your account</h2>
                        <Form>
                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email address" />
                            </Form.Group>
                            <Form.Group controlId="formPassword" className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your password" />
                            </Form.Group>
                            <Button variant="dark" type="submit" className="w-100">
                                Login
                            </Button>
                        </Form>

                        <div className='mt-2'>Not created account yet?<Link to={'/register'}>Register</Link></div>

                    </div>
                </Col>

            </Row>
        </Container>
    );
};

export default Login;
