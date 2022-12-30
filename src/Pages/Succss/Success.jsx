import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Success = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const [item, setItem] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/orders/${id}`)
            .then(res => setItem(res.data));
    }, [id])
    const validatePayment = () => {
        const data = {
            tran_id: id,
            val_id: item?.val_id
        }
        axios.post(`http://localhost:5000/validate`, data)
            .then(res => {
                if (res.data) {
                    alert("Order placed successfully");
                    navigate('/');
                }
            })
    }

    console.log(item);
    return (
        <main className='overflow-hidden bg-white w-full h-full'>
            <div className="py-10 h-full w-full flex flex-col justify-center items-center gap-2">
                <h1  style={{ fontFamily: "Rajdhani" }} className='text-xl font-bold'><span className="text-green-500 text-xl md:text-3xl">Payment Successful</span>. <br /> Confirm your Order</h1>
                <div className="flex flex-col md:flex-row justify-center items-center gap-3 w-full h-fit mx-auto">

                    <div className="p-5 w-full md:w-2/5 space-y-2 mx-auto text-dark">

                        <p>Enjoy your order</p>
                        <h1 className='text-xl font-bold' style={{ color: '#ff4d30' }}>{item?.product_name}</h1>
                        <p className="text-info">{item?.product_profile}</p>
                        <p className='text-secondary pb-3'>Please Confirm Your Payment for Success to Book Your Services!</p>
                        <button className="btn btn-outline btn-info text-white px-7" onClick={validatePayment}>Click to Confirm</button>

                    </div>
                    <div className="flex justify-center w-full h-fit md:w-2/5 p-5 mx-auto">
                        <img src={item?.product_image} alt="" className="img-fluid rounded-xl shadow-xl hover:shadow-inner w-[80%] object-cover h-full" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Success;