import Link from 'next/link';
import React from 'react';
import logo from "../assests/Logo1.png"
import avatar from "../assests/avatar.jpg"
import Image from 'next/image';




const Navbar = () => {

    const avatarImage = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"

    const menuItems = <>

        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100 py-2 border-b-2">
                <div className="w-[280px]">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                menuItems
                            }
                        </ul>
                    </div>
                    <Image src={logo} height={50} width={200} alt="logo" />
                </div>

                <div className="hidden ml-10 lg:flex w-full justify-start ">
                    <ul className="menu px-1 w-full">
                        <li className=''>
                            <div className='border w-full border-gray-400 rounded flex justify-end items-center h-10'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                                <input type="text" className='w-full' placeholder='Search' />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end flex justify-center items-center gap-7 ">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>



                        <p className='hidden lg:block'>Selina Gomez</p>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <Image src={avatar} width={50} height={50} alt='avatar' />
                            </div>
                        </label>

                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-28 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <p className='block lg:hidden'>Selina Gomez</p>
                            </li>
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;