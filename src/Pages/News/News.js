import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';


const News = () => {
    const singleNews = useLoaderData();
    //console.log(singleNews);
    const { title, image_url, details, rating, author, category_id } = singleNews;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <div className='d-flex justify-content-between align-items-center px-3 mt-3 fw-bold'>
                    <p>{author.name}</p>
                    <p>Published Date : {author.published_date}</p>
                    <p> <FaStar className='text-warning'></FaStar> {rating.number}</p>
                </div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary">All news in this category</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;