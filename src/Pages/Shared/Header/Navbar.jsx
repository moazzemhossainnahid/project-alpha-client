import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navigation } from '../../../Data/NavbarData';

const Navbar = () => {
    const [bg, setBg] = useState(false);

    // console.log(myAccount);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false);
        });
    });
    return (
        <div className='h-full w-full'>
            <div className="navbar bg-gray-100">
                <div className="navbar-start">

                    <Link to="/" className="normal-case flex justify-center items-center gap-2 text-xl">
                        <img class="h-12 w-12" src="https://i.ibb.co/CBH3B6n/logo.png" alt="logo" />
                        <h2 class="logo">AvailBox</h2>
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            Navigation?.map((item) => {

                                return (
                                    <li key={item?.name} className={`${bg && 'text-black'} text-xl mx-2 font-semibold cursor-pointer`}>

                                        <NavLink
                                            to={item.href}
                                            smooth={true}
                                            duration={500}
                                            offset={-70}
                                            className="flex rounded px-4 items-center py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-neutral focus:bg-gray-700 focus:text-white focus:outline-none transition duration-150 ease-in-out"
                                        > {item.name} </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            {
                                Navigation?.map((item) => {

                                    return (
                                        <li key={item?.name} className={`${bg && 'text-black'} my-1 text-xl mx-2 font-semibold cursor-pointer`}>

                                            <NavLink
                                                to={item.href}
                                                smooth={true}
                                                duration={500}
                                                offset={-70}
                                                className="flex rounded px-4 items-center py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-neutral focus:bg-gray-700 focus:text-white focus:outline-none transition duration-150 ease-in-out"
                                            > {item.name} </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;