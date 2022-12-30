import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ServicesData } from '../../Data/ServicesData';
import auth from '../../Firebase/firebase.init';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBangladeshiTakaSign } from '@fortawesome/free-solid-svg-icons';

const Booking = () => {
    const { id } = useParams();
    const [totalPrice, setTotalPrice] = useState();
    const [isChecked, setIsChecked] = useState(false);
    const [user] = useAuthState(auth);
  
  
    const handleChecked = (event) => {
      if (event.target.checked) {
        setIsChecked(true);
      } else {
        setIsChecked(false);
      }
    };

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
            service_name: singleData?.name,
            service_img: singleData?.img,
            service_desc: singleData?.desc,
            total_amount: (totalPrice ? singleData?.price * totalPrice : singleData?.price).toFixed(2),
            cus_name: user?.displayName,
            cus_email: user?.email

        }

        console.log(info);

    axios.post(`https://availbox-server.vercel.app/init`, info)
            .then(res => {
                console.log(res);
                if (res?.data) {
                    window.location = res?.data
                }
            })

    };

    return (
        <div className='flex flex-col py-10 gap-7 px-4'>
            <div className='flex flex-col md:flex-row p-2 rounded justify-between align-middle shadow-md px-12 my-auto'>
                <img className='h-28 rounded' src={singleData?.img} alt=" " />
                <div style={{ fontFamily: "Rajdhani" }} className='my-auto text-2xl font-bold flex flex-col gap-2'>
                    <h4>{singleData?.name}</h4>
                    <p><FontAwesomeIcon icon={faBangladeshiTakaSign} /> {singleData?.price}/Month</p>
                </div>
                <div className='my-auto'>
                    <input onChange={handleInputValue}
                        onLoad={(e) => e.target.value = 1}
                        placeholder="Enter Quantity"
                        className='input focus:outline-none input-bordered w-4/5' type="text" name="quantity" id="quantity" />
                </div>
                <div className='my-auto'>
                    <h4 style={{ fontFamily: "Rajdhani" }} className='text-cyan-500 text-xl font-bold'> <FontAwesomeIcon icon={faBangladeshiTakaSign} /> {totalPrice ? singleData?.price * totalPrice : singleData?.price}</h4>
                </div>
            </div>
            <div className='w-full mx-auto'>
                <div className="card w-full md:w-3/5 mx-auto bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">Checkout</h2>
                        <p className='font-semibold text-xl'>Shipping</p>
                        <div className="">
                            <div className="border bg-white px-5 col-span-2  shadow-sm py-5">
                                <h2 className="py-5 text-3xl text-black text-opacity-75">
                                    Personal Information
                                </h2>
                                <form onSubmit={confirmToPay}>
                                    <div className=" grid md:grid-cols-2 grid-cols-1 justify-items-stretch  gap-5  ">
                                        <div className='mt-3'>
                                            <label className="relative cursor-pointer">
                                                <input
                                                    type="text"
                                                    value={user?.displayName}
                                                    placeholder="Input"
                                                    className="h-[50px] bg-[#f3f3f3] rounded w-full px-6 text-md border outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                                                    name="username"
                                                />
                                                <span className=" text-sm bg-transparent te text-opacity-80 absolute left-0 px-2 top-[-37px] transition duration-200 input-text">
                                                    User Name
                                                </span>
                                            </label>
                                        </div>
                                        <div className='mt-3'>
                                            <label className="relative cursor-pointer">
                                                <input
                                                    type="email"
                                                    value={user?.email}
                                                    placeholder="Input"
                                                    className="h-[50px]  bg-[#f3f3f3] w-full px-6 text-md border rounded outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                                                    name="email"
                                                />
                                                <span className=" text-sm bg-transparent te text-opacity-80 absolute left-0 px-2 top-[-37px] transition duration-200 input-text">
                                                    Email
                                                </span>
                                            </label>
                                        </div>
                                        <div className='mt-3'>
                                            <label className="relative cursor-pointer">
                                                <input
                                                    type="text"
                                                    value={singleData?.name}
                                                    placeholder="Input"
                                                    className="h-[50px]  bg-[#f3f3f3] w-full px-6 text-md border rounded outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                                                    name="name"
                                                />
                                                <span className=" text-sm bg-transparent te text-opacity-80 absolute left-0 px-2 top-[-37px] transition duration-200 input-text">
                                                    Service Name
                                                </span>
                                            </label>
                                        </div>
                                        <div className='mt-3'>
                                            <label className="relative cursor-pointer">
                                                <input
                                                    type="text"
                                                    value={totalPrice ? singleData?.price * totalPrice : singleData?.price}
                                                    placeholder="Input"
                                                    className="h-[50px]  bg-[#f3f3f3] w-full px-6 text-md border rounded outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                                                    name="price"
                                                />
                                                <span className=" text-sm bg-transparent te text-opacity-80 absolute left-0 px-2 top-[-37px] transition duration-200 input-text">
                                                    Service Price
                                                </span>
                                            </label>
                                        </div>

                                    </div>
                                    <div>
                                    </div>
                                    <div>

                                        <div className="py-3">
                                            <hr />
                                        </div>

                                        <div className="py-4">
                                            <input
                                                type="checkbox"
                                                name=""
                                                onChange={handleChecked}
                                                id=""
                                                className="checkbox checkbox-sm border-2 checkbox-success"
                                            />
                                            <span className="ml-2">
                                                I have read and accepted{" "}
                                                <a href="!#" className="text-[#009DA6] font-semibold font-sans">
                                                    Terms & Conditions
                                                </a>
                                            </span>
                                        </div>
                                        <div>
                                            <input
                                                type="submit"
                                                disabled={!isChecked}
                                                className="btn text-white bg-[#009DA6] hover:bg-[#007bff]"
                                                value="Confirm and Pay"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;