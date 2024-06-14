import { useContext, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { AuthContext } from '../../pages/Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { creatUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [condition, setCondition] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const username = form.name.value;
        setSuccess('')
        setError('')
        creatUser(email, password)
            .then(result => {
                let user = result.user;
                updateProfile(user, {
                    displayName: username,
                }).then(() => {
                    console.log('User profile updated with username:', username);
                }).catch((error) => {
                    console.error('Error updating user profile:', error);
                    setError(error.message); // Store error message as a string
                });
                console.log(user);
                form.reset()
                setSuccess('Account created successfully')
                setTimeout(() => setSuccess(''), 3000)
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
                setTimeout(() => setError(''), 7000)
                // Store error message as a string
            });
    }

    //cheked conition of the terms and condition
    const handleTermAndCondition = (event) => {
        const ischecked = event.target.checked;
        {
            ischecked ?
                setCondition(true)
                :
                setCondition(false)
        }
    }
    console.log(condition)
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Row className="w-100">
                <Col md={{ span: 6, offset: 3 }}>
                    <div className="border p-4 shadow-sm rounded">
                        <h2 className="text-center mb-4">Register your account</h2>
                        <Form onSubmit={handleRegister}>
                            <Form.Group className="mb-3">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control id='name' name='name' type="text" placeholder="Enter your name" required />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control id='email' name='email' type="email" placeholder="Enter your email address" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name='password' id='password' type="password" placeholder="Enter your password" required />
                            </Form.Group>
                            <Form.Group onClick={handleTermAndCondition} controlId="formTerms" className="mb-3 d-flex gap-2">
                                <Form.Check type="checkbox" required /> <span>Accept <Link to={'/terms'}>Terms & Condition</Link>
                                </span>
                            </Form.Group>
                            <Button disabled={!condition} variant="dark" type="submit" className="w-100">
                                Register
                            </Button>
                        </Form>
                        {error && <p className="text-danger mt-2">{error}</p>} {/* Display error message */}
                        {success && <p className="text-success mt-2">{success}</p>} {/* Display error message */}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;
