import React from 'react';
import { BannnerCardData, SliderData } from '../../Data/SliderData';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const Banner = () => {
    return (
      <div className=''>
            <div className="z-0">
            <Slider className=" h-[65vh] md:h-[85vh] w-full overflow-hidden" autoplay='true' duration="5000" previousButton="" nextButton="">
                {
                    SliderData.map((data, idx) => {
                        return (
                            <div key={idx} className={` w-full h-[65vh] md:h-[85vh]`}>
                                <img src={data?.img} alt="" className=" h-[65vh] md:h-[85vh] w-full relative object-cover" />
                                
                            </div>
                        )
                    })
                }
            </Slider>
            <div className=" w-5/6 mx-auto relative -mt-10 z-50 p-2 grid grid-cols-1 lg:grid-cols-3 gap-5 bg-base-100 rounded-md shadow-lg">
                {
                    BannnerCardData.map((data, idx) => {
                        return (
                            <div className="flex w-full mx-auto justify-center items-center gap-3">
                                <div className="w-1/6">
                                    <img className='w-10 h-10' src={data?.icon} alt="" />
                                </div>
                                <div className="w-5/6">
                                    <h3 className="text-2xl font-bold text-left">{data?.title}</h3>
                                    <p className="font-semibold text-md">{data?.desc}</p>                                </div>
                            </div>
                        )
                    })
                }
            </div>
            </div>

        </div>
    );
};

export default Banner;