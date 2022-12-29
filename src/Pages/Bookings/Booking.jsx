import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { id } = useParams();
    return (
        <div>
            <h3 className="text-5xl">{id}</h3>
        </div>
    );
};

export default Booking;