import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { BannnerCardData, SliderData } from "../../Data/SliderData.js"




const HomeTopCarousel = () => {

    const slides = [
        { img: 'https://i.ibb.co/hBqcQgS/banner-1.png' },
        { img: 'https://i.ibb.co/WzDcFm8/banner-2.png' },
        { img: 'https://i.ibb.co/48pcwk6/banner-3.png' },
        { img: 'https://i.ibb.co/xFXSyvy/banner-4.png' },
        { img: 'https://i.ibb.co/h2kgBJg/banner-5.png' },
        { img: 'https://i.ibb.co/dksmwXX/banner-6.png' },
        { img: 'https://i.ibb.co/CHBZ6XG/banner-7.png' },
    ];

    return (
        <div className='w-full h-40 md:h-[19rem] lg:h-full bg-white object-cover mx-auto hello flex justify-center items-center'>
            <Slider autoplay={2000} infinite={true} previousButton='' nextButton='' >
                {SliderData?.map((slide, index) => <div key={index}>
                    <div className="flex justify-center object-cover items-center h-full w-full mx-auto gap-3">
                        <div className={` w-full h-[65vh] md:h-[85vh]`}>
                            <img src={slide?.img} alt="" className=" h-[65vh] md:h-[85vh] w-full object-cover" />

                        </div>
                    </div>
                </div>)}
            </Slider>
            {/* <div className=" w-5/6 mx-auto relative -mt-10 z-50 p-2 grid grid-cols-1 lg:grid-cols-3 gap-5 bg-base-100 rounded-md shadow-lg">
                    {
                        BannnerCardData?.map((data, idx) => {
                            return (
                                <div className="flex w-full mx-auto justify-center items-center gap-3">
                                    <div className="w-1/6">
                                        <img className='w-10 h-10' src={data?.icon} alt="" />
                                    </div>
                                    <div className="w-5/6">
                                        <h3 className="text-2xl font-bold text-left">{data?.title}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div> */}

            {/* <Slider autoplay={2000} infinite={true} previousButton='' nextButton='' >
                <div key="1">
                    <div className="flex justify-between max-w-7xl mx-auto gap-3 p-5">
                        <div className='flex-initial w-3/4'>
                            <h1 className='text-7xl text-white'>Welcome To</h1>
                            <h1 className='mt-3 text-7xl text-white'>Online Bank BD</h1>
                            <p className='my-10 text-white'>
                                Our Online banking system
                                project's aim is to automate transactions of the bank and provide better and faster service to the
                                customers by using the internet.
                            </p>

                            <div className="flex justify-left items-center pt-12 lg:ml-0">
                                <button className="btn btn-primary p-3 px-5 rounded-full">
                                    Get Started
                                </button>
                                <button className="moreBtn px-5 py-2 text-white text-lg ml-6">
                                    Learn More <FontAwesomeIcon className="" icon={faArrowRight} />{" "}
                                </button>
                            </div>

                        </div>

                        <div className=''>
                            <img src="https://i.ibb.co/8zhtLf0/Vector.png" alt="" />
                        </div>
                    </div>
                </div>

                <div key="2">
                    <div className="flex justify-between max-w-7xl mx-auto p-5">
                        <div className='flex-initial w-3/4'>
                            <h1 className='text-7xl text-white'>We are different</h1>
                            <h1 className=' mt-3 text-7xl text-white'>From Other</h1>
                            <p className='my-10 text-white'>
                                Our Online banking system
                                project's aim is to automate transactions of the bank and provide better and faster service to the
                                customers by using the internet.
                            </p>

                            <div className="flex justify-left items-center pt-12 lg:ml-0">
                                <button className="btn btn-primary p-3 px-5 rounded-full">
                                    Get Started
                                </button>
                                <button className="moreBtn px-5 py-2 text-white text-lg ml-6">
                                    Learn More <FontAwesomeIcon className="" icon={faArrowRight} />{" "}
                                </button>
                            </div>

                        </div>

                        <div className=''>
                            <img src="https://i.ibb.co/ZzvkkY5/card.png" alt="" />
                        </div>
                    </div>
                </div>

                <div key="3">
                    <div className="flex justify-between max-w-7xl mx-auto gap-3 p-5">
                        <div className='flex-initial w-3/4'>
                            <h1 className='text-7xl text-white'>Welcome To</h1>
                            <h1 className='mt-3 text-7xl text-white'>Online Bank BD</h1>
                            <p className='my-10 text-white'>
                                Our Online banking system
                                project's aim is to automate transactions of the bank and provide better and faster service to the
                                customers by using the internet.
                            </p>

                            <div className="flex justify-left items-center pt-12 lg:ml-0">
                                <button className="btn btn-primary p-3 px-5 rounded-full">
                                    Get Started
                                </button>
                                <button className="moreBtn px-5 py-2 text-white text-lg ml-6">
                                    Learn More <FontAwesomeIcon className="" icon={faArrowRight} />{" "}
                                </button>
                            </div>

                        </div>

                        <div className=''>
                            <img src="https://i.ibb.co/8zhtLf0/Vector.png" alt="" />
                        </div>
                    </div>
                </div>              

            </Slider> */}
        </div>
    );
};

export default HomeTopCarousel;