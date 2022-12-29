import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ServicesData } from '../../Data/ServicesData';
import auth from '../../Firebase/firebase.init';
import axios from 'axios';

const Booking = () => {
    const { id } = useParams();
    const [totalPrice, setTotalPrice] = useState();
    const [user] = useAuthState(auth);

    const singleData = ServicesData?.find(s => s?.id === Number(id));

    const handleInputValue = (e) => {
        let value = parseInt(e.target.value);

        if (value < 0) {
            alert('value can not be less than 0');
            value = 1;
        }
        else {
            setTotalPrice(value);
        }
    };

    const confirmToPay = (event) => {

        event.preventDefault();

        const info = {
            item_name: singleData?.name,
            item_image: singleData?.img,
            total_amount: (totalPrice ? singleData?.price * totalPrice : singleData?.price).toFixed(2),
            cus_name: user?.displayName,
            cus_email: user?.email

        }

        console.log(info);

        // axios.post(`https://hospisearch-server-production.up.railway.app/init`, info)
        //     .then(res => {
        //         if (res?.data) {
        //             window.location = res?.data
        //         }
        //     })

        // ------------------------------------

        // if (urlData?.data) {
        //   window.location.href = urlData?.data
        // }

    };

    return (
        <div className='flex flex-col py-10 gap-7 px-4'>
            <div className='flex flex-col md:flex-row p-2 rounded justify-between align-middle shadow-md px-12 my-auto'>
                <img className='h-28 rounded' src={singleData?.img} alt=" " />
                <div style={{fontFamily:"Rajdhani"}} className='my-auto text-2xl font-bold flex flex-col gap-2'>
                    <h4>{singleData?.name}</h4>
                    <p>${singleData?.price}</p>
                </div>
                <div className='my-auto'>
                    <input onChange={handleInputValue}
                        onLoad={(e) => e.target.value = 1}
                        placeholder="Enter Quantity"
                        className='input focus:outline-none input-bordered w-4/5' type="text" name="quantity" id="quantity" />
                </div>
                <div className='my-auto'>
                    <h4 style={{fontFamily:"Rajdhani"}} className='text-cyan-500 text-xl font-bold'>${totalPrice ? singleData?.price * totalPrice : singleData?.price}</h4>
                </div>
            </div>
            <div className='w-full mx-auto'>
                <div className="card w-3/5 mx-auto bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">Checkout</h2>
                        <p className='font-semibold text-xl'>Shipping</p>
                        <div onClick={confirmToPay} className="card-actions justify-end">
                            <button className="btn btn-info btn-outline">Confirm to Pay</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;