import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const [error, setError] = useState();
    const [checked, setChecked] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;

        createUser(email, password)
            .then(response => {
                const profile = {
                    displayName: name,
                    photoURL: photoURL
                }
                verifyEmail().then(() => {
                    toast.success("Verification email has been sent");
                }).catch(error => console.log(error))
                updateUserProfile(profile).then(() => {

                }).catch(error => setError(error.message));

                form.reset();

            }).catch(error => {
                setError(error.message);
            })
    }
    const handleChecked = (e) => {
        const checkbox = e.target.checked;
        setChecked(checkbox)
    }
    return (
        <div>
            <h2>Register</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="url" placeholder="Enter photo url" name="photoURL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I accept all terms and conditions" onClick={handleChecked} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!checked}>
                    Register
                </Button>
                <Form.Text className="text-danger ps-2">
                    {error && error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Register;