import React from 'react';
import Banner from '../Components/Banner';
import CustomerReview from '../Components/CustomerReview';
import Newsletter from '../Components/Newsletter';
import Review from '../Components/Review';
import Team from '../Components/Team';
import WelcomeNote from '../Components/WelcomeNote';

const Home = () => {
    return (
        <div className='w-full h-full items-center justify-center'>
            <Banner></Banner>
            <WelcomeNote></WelcomeNote>
            <Newsletter></Newsletter>
            <Team></Team>
            <div className="divider"></div>
            <Review></Review>
            <div className="divider"></div>
            <CustomerReview ></CustomerReview>
            <div className="mb-10"></div>

        </div>
    );
};

export default Home;