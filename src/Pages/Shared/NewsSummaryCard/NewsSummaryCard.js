import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaRegEye, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummaryCard = ({ news }) => {
    const { _id, title, details, image_url, author, rating, total_view } = news
    //console.log(news);
    return (
        <div className='py-3'>
            <Card>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <Image src={author.img} roundedCircle style={{ height: "60px" }}></Image>
                        <div className='ms-3'>
                            <p className='m-0'>{author.name}</p>
                            <p>{author.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark className='me-2'></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card className='mt-3'>
                        {
                            (details.length > 250) ?
                                <p>
                                    {details.slice(0, 250)}
                                    <Link to={`/news/${_id}`}> ... Read more</Link>
                                </p>

                                : <p>{details}</p>
                        }
                    </Card>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <p> <FaStar className='text-warning'></FaStar> {rating.number}</p>
                    <p><FaRegEye></FaRegEye> {total_view} </p>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;