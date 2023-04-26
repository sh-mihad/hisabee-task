import React from 'react';
import itemLogo from "../../assests/bkash.png"
import Image from 'next/image';
const AddAccountItem = () => {
    return (
        <div className='p-5  rounded-md bg-[#f5f5f5] text-center border border-[#f5f5f5] hover:border hover:border-green-400'>
             <Image src={itemLogo} width={70} height={70} alt='transaction logo' className='mx-auto' ></Image>
             <p className='my-2'>Baksh</p>
        </div>
    );
};

export default AddAccountItem;