import React from 'react';

const ServiceDetails = (data) => {

    console.log(data?.data);
    const providor = data?.data;

    return (
        <div data-aos="fade-up" class="card w-full m-auto shadow-lg">
            <figure className='p-5 rounded-2xl border-dotted border-indigo-500 border-2'>
                <img src={providor?.img} alt="Images" />
            </figure>
            <div class="card-body flex justify-start items-center">
                <h2 class="font-bold text-2xl text-center"> {providor?.name}</h2>
                <h3 className="text-center mb-3"><span className="font-bold text-gray-500">ID: </span>{providor?.idNo}</h3>
                <h3 className="text-center mb-3">{providor?.exp} Years of Experiences</h3>
                <div className="text-left w-full flex flex-col justify-start">
                <p className=""><span className="font-bold text-gray-500">Phone: </span>{providor?.phone}</p>
                    <span className="font-bold text-left text-gray-500">Expense: </span>
                    <div className="pl-5">
                        <p className="font-semibold"><span className="font-bold text-gray-500">Per Hour: $</span>{providor?.price?.perHour}</p>
                        <p className="font-semibold"><span className="font-bold text-gray-500">Per Day: $</span>{providor?.price?.perDay}</p>
                        <p className="font-semibold"><span className="font-bold text-gray-500">Per Month: $</span>{providor?.price?.perMonth}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;