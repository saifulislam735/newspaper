// import React from 'react';
// import { getAuth } from 'firebase/auth';
import { useContext, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../pages/Provider/AuthProvider';
// import app from '../../firebase/firebase.config';

const Login = () => {
    // const auth = getAuth(app);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const { login } = useContext(AuthContext)

    const handleSignin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setSuccess('')
        setError('')
        login(email, password)
            .then(result => {
                let user = result.user;
                console.log(user);
                navigate(from, { replace: true });

                setSuccess('Login in seccessfull')
                setTimeout(() => setSuccess(''), 3000)
                form.reset()

            })
            .catch(error => {
                console.log(error);
                setError(error.message);
                setTimeout(() => setError(''), 7000)
                // Store error message as a string
            });
    }
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Row className="w-100">
                <Col md={{ span: 6, offset: 3 }}>
                    <div className="border p-4 shadow-sm rounded">
                        <h2 className="text-center mb-4">Login in your account</h2>
                        <Form onSubmit={handleSignin}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control id='email' name='email' type="email" placeholder="Enter your email address" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control id='password' name='password' type="password" placeholder="Enter your password" />
                            </Form.Group>
                            <Button variant="dark" type="submit" className="w-100">
                                Login
                            </Button>
                        </Form>

                        <div className='mt-2'>Not created account yet?<Link to={'/register'}>Register</Link></div>
                        <div>
                            {error && <p className="text-danger mt-2">{error}</p>} {/* Display error message */}
                            {success && <p className="text-success mt-2">{success}</p>} {/* Display error message */}
                        </div>
                    </div>
                </Col>

            </Row>
        </Container>
    );
};

export default Login;
