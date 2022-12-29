import React from 'react';
import Banner from '../Components/Banner';
import Review from '../Components/Review';
import Team from '../Components/Team';

const Home = () => {
    return (
        <div className='w-full h-full items-center justify-center'>
           <Banner></Banner>
           <Team></Team>
            <Review></Review>
        </div>
    );
};

export default Home;