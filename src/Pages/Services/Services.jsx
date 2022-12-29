import React from 'react';
import ServicesCard from './ServicesCard';
import ServicesHero from './ServicesHero';

const Services = () => {
    return (
        <div className='h-full w-full'>
            <ServicesHero/>
            <ServicesCard/>
        </div>
    );
};

export default Services;