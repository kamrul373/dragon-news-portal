import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData();

    return (
        <div>
            <h2>Dragon news : {allNews.length} </h2>
            <div className='py-3'>
                {
                    allNews.map(news => <NewsSummaryCard
                        key={news._id}
                        news={news}
                    ></NewsSummaryCard>)
                }
            </div>
        </div>
    );
};

export default Home;