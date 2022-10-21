import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    // context
    const { login, setLoading } = useContext(AuthContext);
    // error state
    const [error, setError] = useState(null);
    // location anvigation
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/yourprofile";

    console.log(from);
    //console.log(from)
    // handler for submit btn
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(response => {
                const user = response.user;
                form.reset();
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                } else {
                    toast.error("Please verify your email first")
                }

            }).catch(error => setError(error.message))
            .finally(() => setLoading(false))

    }
    return (
        <div>
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Text className="text-danger ps-2">
                    {error && error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;