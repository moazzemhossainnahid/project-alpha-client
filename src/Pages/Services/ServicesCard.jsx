import React from 'react';

const ServicesCard = () => {
    return (
        <div className="w-full h-auto my-16">
            <div className="max-w-[1240px] m-auto">
                <div className="text-center">
                    <h2 className="text-3xl capitalize font-bold">
                        The leading global marketplace <br />
                        for hiring people
                    </h2>
                    <div className="grid md:grid-cols-2 grid-cols-1 my-14 md:mx-4 sm:mx-4 gap-y-14 ">
                        <div className="flex  items-center justify-around sm:flex-col md:flex-row gap-4 lg:gap-0">
                            <div className="md:w-40 lg:w-60 w-3/4 lg:h-60 md:h-40 h-72 lg:flex-shrink-0 md:flex-shrink-0   bg-transparent cursor-pointer group perspective">
                                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 object-contain">
                                    <div className="absolute backface-hidden   w-full h-full">
                                        <div className="h-full w-full relative">
                                            <img
                                                src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/04/student-friends-studying-together-UNCHR5E-768x513.jpg"
                                                className="w-full h-full rounded-lg " alt=''
                                            />
                                            <div className="w-full h-full absolute top-0 bg-opacity-20 rounded-lg bg-black">
                                                <img
                                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/1200px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png"
                                                    alt="dd"
                                                    className="shadow w-1/3 h-1/3 absolute top-[33%] left-[33%] bg-opacity-70 "
                                                />
                                                <h1 style={{ fontFamily: "Rajdhani" }} className="text-white text-3xl p-5 font-bold font-mono">
                                                    Maid
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute my-rotate-y-180 backface-hidden rounded-lg w-full h-full bg-gray-300 overflow-hidden">
                                        <div className="h-full w-full relative">
                                            {/* <img src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/04/creative-business-people-working-on-business-WGCU95A-768x512.jpg"
                                                className="w-full h-full" alt=''
                                            /> */}
                                            <div className="w-full h-full absolute top-0 bg-opacity-30 rounded-lg bg-black flex flex-col space-y-2 items-center justify-center">
                                                <h1 style={{ fontFamily: "Rajdhani" }} className="text-white text-3xl font-bold font-mono">
                                                    Maid
                                                </h1>
                                                <button className="btn btn-outline outline-primary px-7 ">Click to Hire</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider w-full  md:w-5/6 m-auto opacity-30"></div>
        </div>
    );
};

export default ServicesCard;