'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import nagad from "../../assests/nagadLogo.png"
import rocekt from "../../assests/rocekt.png"
import bkash from "../../assests/bkash.png"
import upay from "../../assests/upay.png"
import bank from "../../assests/bank.png"
import others from "../../assests/others.png"


const Card = ({account}) => {

    console.log(account);
    const {type,balance,account_name} = account

    
    const [button, setButton] = useState(false)
   

    let accountLogo ="";
   if(account_name === "BKASH"){
    accountLogo = bkash
   }else if(account_name === "BANK"){
    accountLogo = bank
   }else if(account_name === "ROCKET"){
    accountLogo = rocekt
   }else if(account_name === "NAGAD"){
    accountLogo = nagad
   }else if (account_name === "UPAY"){
    accountLogo = upay
   }else{
    accountLogo = others
   }

    return (
        <div onMouseEnter={() => setButton(true)} onMouseLeave={() => setButton(false)} className='p-5 bg-white w-full rounded-lg hover:shadow-lg duration-150 flex justify-between'>
            <div>
                <Image src={accountLogo} width={50} height={30} alt='transaction logo' ></Image>
                <p className='my-3 text-gray-400'>{account_name}</p>
                <h1 className='text-2xl font-bold'><span>৳</span> {balance}</h1>
            </div>
            <button hidden={!button} className='bg-black px-5 py-3 rounded-md text-white h-14'>Cash In/Out</button>
        </div>
    );
};

export default Card;