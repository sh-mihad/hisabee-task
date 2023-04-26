import React from 'react';
import Dashboard from './Dashboard';
import AddAccountItem from './AddAccountItem';


const Accounts = () => {
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
                    <h2 className='text-2xl  font-bold my-5'>Add an Account</h2>
                    <hr />
                    <p className='my-3'>Select Accont</p>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                        <AddAccountItem />
                        <AddAccountItem />
                        <AddAccountItem />
                        <AddAccountItem />
                        <AddAccountItem />
                        <AddAccountItem />
                    </div>

                    {/*Account Digits  */}
                    <div className="form-control w-full  my-5">
                        <label className="label text-2xl font-bold">Account name ( Up to 10 Digits)</label><input type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                     
                     <hr className='mt-24' />
                    <div className='flex gap-3 justify-end my-5'>
                        <button className='px-7 py-3 border border-black text-center rounded-md hover:bg-black hover:text-white duration-300'>Cnacel</button>

                        <button className='px-7 py-3 border bg-black text-white  text-center rounded-md  duration-300'>Save</button>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Accounts;