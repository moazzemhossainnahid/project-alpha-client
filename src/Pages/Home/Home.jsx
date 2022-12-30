import React from 'react';
import Banner from '../Components/Banner';
import CustomerReview from '../Components/CustomerReview';
import Review from '../Components/Review';
import Team from '../Components/Team';
import WelcomeNote from '../Components/WelcomeNote';

const Home = () => {
    return (
        <div className='w-full h-full items-center justify-center'>
           <Banner></Banner>
           <WelcomeNote></WelcomeNote>
           <Team></Team>
            <Review></Review>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;