import React from 'react';
import Image from 'next/image';
const AddAccountItem = ({account,setAccountType,accountType}) => {
    const {name,img} = account || {}  



    return (
        <div  onClick={()=>setAccountType(name.toUpperCase())} className={`p-5 flex flex-col items-center  rounded-md bg-[#f5f5f5] text-center border border-[#f5f5f5] hover:border hover:border-green-400 ${accountType === name.toUpperCase() && "border-green-400" }`}>
             <Image src={img} width={70} height={70} alt='transaction logo' className='mx-auto' ></Image>
             <p className='my-2'>{name}</p>
        </div>
    );
};

export default AddAccountItem;