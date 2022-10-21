import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import brand from "../../../assets/img/brand.png"
import brand2 from "../../../assets/img/brand2.png";

const BrandsCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={brand}
                        alt="First slide"
                        style={{ height: "150px" }}
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={brand2}
                        alt="Second slide"
                        style={{ height: "150px" }}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BrandsCarousel;