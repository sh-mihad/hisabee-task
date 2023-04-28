import { sideBarStatus } from '@/app/fetures/sidebarSlice/sidebarSlice';
import React from 'react';
import { useDispatch } from 'react-redux';


const AddNewAccount = () => {

    const dispatch = useDispatch()

    const handleSidebar=()=>{
        dispatch(sideBarStatus("addAccount"))
    }


    return (
        <label onClick={handleSidebar}  htmlFor="add-account" className='p-5 bg-white w-full border text-center border-dashed border-gray-400 rounded-lg'>
            <p className='my-3 text-lg text-center flex flex-row justify-center text-gray-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </p>
            <p className='my-3 text-lg text-gray-500'>Add New Account</p>
        </label>

    );
};

export default AddNewAccount;