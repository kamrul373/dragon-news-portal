import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideBar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then(response => response.json())
            .then(categories => setCategories(categories));
    }, [])
    return (
        <div>
            <h4>All Categories</h4>
            <div >
                {
                    categories.map(category => <p key={category.id}><Link className='text-decoration-none' to={`/category/${category.id}`}>{category.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default LeftSideBar;