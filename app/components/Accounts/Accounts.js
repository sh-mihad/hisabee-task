"use client"
import React, { useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import AddAccountItem from './AddAccountItem';
import bakshLogo from "../../assests/bkash.png"
import bankLogo from "../../assests/bank.png"
import nagadLogo from "../../assests/nagadLogo.png"
import rocketLogo from "../../assests/rocekt.png"
import upayLogo from "../../assests/upay.png"
import othersLogo from "../../assests/others.png"
import { useAddAccountMutation } from '@/app/fetures/accountsApi/accountsApi';
import CashInOutCard from './CashInOutCard';
const accountTypeArr = [
    {
        id: 1,
        name: "Bkash",
        img: bakshLogo
    },
    {
        id: 2,
        name: "Bank",
        img: bankLogo
    },
    {
        id: 3,
        name: "Nagad",
        img: nagadLogo
    },
    {
        id: 4,
        name: "Rocket",
        img: rocketLogo
    },
    {
        id: 5,
        name: "Upay",
        img: upayLogo
    },
    {
        id: 6,
        name: "Others",
        img: othersLogo
    },
]
const Accounts = () => {

    const [addAccount, { data, isLoading, isError, error: addAccountError }] = useAddAccountMutation()

    const [accountType, setAccountType] = useState("")
    const [name, setName] = useState("")
    const [cashState,setCashState]=useState("")
    console.log(cashState);
    useEffect(() => {
        
    }, [data])

    const handleSubmit = (e) => {
        e.preventDefault()
        const accountData = {
            account_type: accountType,
            account_name: name.toUpperCase(),
        }
        addAccount(accountData)

    }




    return (
        <div className="drawer drawer-end">
            <input id="add-account" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">


                <p className='m-2'>Accounts</p>
                <Dashboard />
            </div>

            <div className="drawer-side">
                <label htmlFor="add-account" className="drawer-overlay"></label>
                <div className="menu p-4 w-5/12 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {/* <h2 className='text-2xl  font-bold my-5'>Add an Account</h2>
                    <hr />
                    <p className='my-3'>Select Accont</p>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>

                        {
                            accountTypeArr.map(account => <AddAccountItem key={account.id} accountType={accountType} setAccountType={setAccountType} account={account} />)
                        }
                    </div> */}

                    {/*Account Digits  */}
                    {/* <form onSubmit={handleSubmit}>
                        <div className="form-control w-full  my-5">
                            <label className="label text-2xl font-bold">Account name ( Up to 10 Digits)</label><input type="text" placeholder="Type here" value={name} onChange={()=>setName(event.target.value)} className="input input-bordered w-full " />
                        </div>

                        <hr className='mt-24' />
                        <div className='flex gap-3 justify-end my-5'>
                            <button className='px-7 py-3 border border-black text-center rounded-md hover:bg-black hover:text-white duration-300'>Cnacel</button>

                            <button className='px-7 py-3 border bg-black text-white  text-center rounded-md  duration-300'>Save</button>

                        </div>
                    </form> */}

                    <div>
                        <h2 className='text-2xl  font-bold my-5'>Cash In/Out</h2>
                        <hr />
                        <CashInOutCard />
                        <form onSubmit={handleSubmit}>
                            <div className="btn-group">
                                <button  onClick={()=>setCashState("cashIn")} className={`px-7 py-3 border border-black text-center rounded-md hover:bg-black hover:text-white duration-300 ${cashState==="cashIn" && "bg-black text-white"}`}>Cash In</button>

                                <button onClick={()=>setCashState("cashOut")} className={`px-7 py-3 border border-black text-center rounded-md hover:bg-black hover:text-white duration-300 ${cashState==="cashOut" && "bg-black text-white"}`}>Cash Out</button>
                            </div>
                            <div className="form-control w-full  my-5">
                                <label className="label text-2xl font-bold">Cash in ammount</label><input type="text" placeholder="Type here" value={name} onChange={() => setName(event.target.value)} className="input input-bordered w-full " />
                            </div>

                            <hr className='mt-24' />
                            <div className='flex gap-3 justify-end my-5'>
                                <button className='px-7 py-3 border border-black text-center rounded-md hover:bg-black hover:text-white duration-300'>Cnacel</button>

                                <button type='submit' className='px-7 py-3 border bg-black text-white  text-center rounded-md  duration-300'>Add</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Accounts;