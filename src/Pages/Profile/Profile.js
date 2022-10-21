import React, { useContext, useRef, useState } from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const Profile = () => {
    const { user, updateUserProfile, setLoading } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName);
    const [photoURL, setPhotoURL] = useState(user?.photoURL);

    const photoRef = useRef(user?.photoURL);

    const handleNameChange = (e) => {
        const name = e.target.value;
        setName(name);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const profile = {
            displayName: name,
            photoURL: photoRef.current.value
        }
        updateUserProfile(profile).then(() => {
            toast.success("profile updated successfull");
        }).catch(error => toast.error(error.message))
            .finally(() => setLoading(false))

    }
    return (
        <div>
            <h2>Profile</h2>
            <Image src={photoURL} roundedCircle style={{ height: "100px" }}></Image>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" defaultValue={name} onChange={handleNameChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="url" placeholder="Enter photo url" name="photoURL" defaultValue={photoURL} ref={photoRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" defaultValue={user?.email} readOnly />
                </Form.Group>

                <Button variant="primary" type="submit" >
                    Update Profile
                </Button>
            </Form>
        </div>
    );
};

export default Profile;