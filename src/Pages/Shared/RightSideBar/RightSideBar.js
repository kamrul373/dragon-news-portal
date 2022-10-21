import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaMicrosoft, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { AuthContext } from '../../../context/AuthProvider';
import BrandsCarousel from '../Brands/BrandsCarousel';
const RightSideBar = () => {
    const { loginUsingProvider } = useContext(AuthContext)
    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider()
        loginUsingProvider(provider)
            .then(response => {
                const user = response.user;
                console.log(user);
            }).catch(err => console.error(err))
    }
    const handleGithubLogin = () => {
        const provider = new GithubAuthProvider();
        loginUsingProvider(provider)
            .then(response => {
                const user = response.user;
                console.log(user);
            }).catch(err => console.log(err))
    }
    return (
        <div>
            <Button onClick={handleGoogleLogin} className='d-block w-100 mb-2' variant="outline-primary"><FaGoogle />  Login with Google</Button>
            <Button onClick={handleGithubLogin} className='d-block w-100 ' variant="outline-dark"> <FaGithub /> Login with Github</Button>
            <div className='px-2 py-3'>
                <h5>Find us</h5>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter></FaTwitter> Twitter </ListGroup.Item>
                    <ListGroup.Item> <FaLinkedin></FaLinkedin> Linkedin </ListGroup.Item>
                    <ListGroup.Item><FaGithub></FaGithub> Github</ListGroup.Item>
                    <ListGroup.Item> <FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandsCarousel></BrandsCarousel>
            </div>

        </div>
    );
};

export default RightSideBar;