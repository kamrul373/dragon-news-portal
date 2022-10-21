import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import RightSideBar from '../RightSideBar/RightSideBar';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut().then(() => { }).catch(() => { });
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><Link to="/" className='text-decoration-none text-white'>Dragon News</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* Menu */}
                        </Nav>
                        <Nav>
                            {
                                !user?.uid && <div className='d-flex align-items-center px-2'>
                                    <Link className='text-white text-decoration-none me-3' to="/register">Register</Link>
                                    <Link className='text-white text-decoration-none' to="/login">Login</Link>
                                </div>
                            }
                            <Nav.Link eventKey={2} className="text-white">
                                {user?.displayName}
                            </Nav.Link>
                            <Nav.Link eventKey={2} onClick={handleSignOut}>
                                {user?.uid && <FaSignOutAlt></FaSignOutAlt>}
                            </Nav.Link>
                            <Link to="/yourProfile" className='ms-2 text-white'>
                                {user?.photoURL ? <Image style={{ height: "30px", }} roundedCircle src={user.photoURL}></Image> : <FaUserAlt></FaUserAlt>}
                            </Link>

                        </Nav>
                        <div className='d-lg-none'>
                            <LeftSideBar></LeftSideBar>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>


    );
};

export default Header;

