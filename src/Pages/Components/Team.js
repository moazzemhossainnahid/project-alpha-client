import React from 'react';
import { TeamData } from '../../Data/TeamData';

const Team = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 px-5">
                <div className="">
                    <h1 className="text-3xl md:text-6xl font-bold fw-bold capitalize" style={{ fontFamily: "Rajdhani" }}>They will <span className="bg-gray-200">cook</span> for you</h1>
                    <p className="pt-7">Consectetur numquam poro nemo veniam
                        eligendi rem adipisci quo modi.</p>
                </div>
            </div>

            <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center mx-auto gap-5 px-5">

                {
                    TeamData?.map(data => (
                        <div key={data?.id} className="w-full pb-10 group mx-auto duration-200">
                            <div className="w-full relative">
                                <div className="w-full bg-gray-200 khd-photo-frame overflow-hidden h-[70%]">
                                    <img src={data?.img} alt="" className="w-full scale-100 group-hover:scale-110 duration-200 " />
                                </div>
                            </div>
                            <div className="space-y-1 w-full mx-auto pt-3">
                                <h1 className="font-bold text-gray-800 text-xl">{data?.name}</h1>
                                <p className="text-md text-gray-700 font-semibold text-center">{data?.title}</p>
                            </div>
                            <div className="app__footer-links_icons flex mx-auto w-full justify-center">
                               
                            </div>
                        </div>
                    ))
                }
            </div>



        </div>
    );
};

export default Team;