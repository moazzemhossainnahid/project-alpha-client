import React from 'react';
import Banner from '../Components/Banner';
import ServicesBanner from './ServicesBanner';
import ServicesCard from './ServicesCard';


const Services = () => {
    return (
        <div className='h-full w-full'>
            <ServicesBanner></ServicesBanner>
            <ServicesCard/>
        </div>
    );
};

export default Services;