import React from 'react';
import baksh from "../../assests/bkash.png"
import Image from 'next/image';

const CashInOutCard = () => {
    return (
        <div className='bg-red-300 my-5 p-5 rounded-md flex items-center gap-5'>
            <div>
                <Image src={baksh} width={90} height={50} alt='logo'/>
            </div>
            <div>
                <h4>Baksh</h4>
                <p className='bg-white p-2'>Balance:৳12500</p>
            </div>
        </div>
    );
};

export default CashInOutCard;