import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideBar from '../Pages/Shared/LeftSideBar/LeftSideBar';
import RightSideBar from "../Pages/Shared/RightSideBar/RightSideBar";
import Header from "../Pages/Shared/Header/Header";
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container className='my-4'>

                <Row>
                    <Col lg={2} className='d-lg-block d-none'>
                        <LeftSideBar></LeftSideBar>
                    </Col>
                    <Col lg={7}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightSideBar></RightSideBar>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;