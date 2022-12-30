import React from 'react';
import { TeamData } from '../../Data/TeamData';

const Team = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 px-5 mt-10">
                <div className="">
                    <h1 className="text-3xl md:text-5xl font-bold fw-bold capitalize" style={{ fontFamily: "Rajdhani" }}>They will get<span className="bg-gray-200"> service </span>for you</h1>

                </div>
            </div>
            <div class="carousel w-full mb-20 mt-10">
                <div data-aos="fade-up" class="card w-96 m-auto">
                    <figure><img src="https://i.ibb.co/82T1n2Q/totonji.jpg" alt="Shoes" /></figure>
                    <div class="card-body flex items-center">
                        <h2 class="font-bold text-2xl text-center"> Ahmad Totonji</h2>
                        <h3 className='text-center'>totonjin@gmail.com</h3>
                        <h3 className='text-center mb-5'>+8801774005404</h3>
                        <p className='text-center'>Student of Computer Science and Engineering Department from Daffodil International University</p>

                    </div>

                </div>
                <div data-aos="fade-up" class="card w-96 m-auto">
                    <figure><img src="https://i.ibb.co/WvJb8rX/Whats-App-Image-2022-12-29-at-8-22-47-PM-1.jpg" alt="Shoes" /></figure>
                    <div class="card-body flex items-center">
                        <h2 class="font-bold text-2xl text-center">Piyush Kanti Sutradhar</h2>
                        <h3 className='text-center'>piyush.pinak007@gmail.com</h3>
                        <h3 className='text-center mb-5'>+880163630411</h3>
                        <p className='text-center'>Student of Computer Science and Engineering Department from Daffodil International University</p>

                    </div>
                </div>
                <div data-aos="fade-up" class="card w-96 m-auto">
                    <figure><img src="https://i.ibb.co/rk2H0X1/Whats-App-Image-2022-12-29-at-8-22-47-PM.jpg" alt="Shoes" /></figure>
                    <div class="card-body flex items-center">
                        <h2 class="font-bold text-2xl text-center">Md. Shamim Hossen</h2>
                        <h3 className='text-center'>shamim.cse99@gmail.com</h3>
                        <h3 className='text-center mb-5'>+880163630411</h3>
                        <p className='text-center'>Student of Computer Science and Engineering Department from Daffodil International University</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;