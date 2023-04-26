'use client';
import React from 'react';
import Chart from './Chart';
import Card from './Card';
import AddNewAccount from './AddNewAccount';
import Drawer from './Drawer';
import { useGetAccountsQuery } from '@/app/fetures/accountsApi/accountsApi';

const Dashboard = () => {
    const {data:accounts,isLoading,isError} = useGetAccountsQuery()
    console.log(accounts);

    let content = null
    if (isLoading) {
        content = <div>Loading.....</div>
      } else if (!isLoading && isError) {
        content = <div>Some Error was occared</div>
      } else if (!isLoading && !isError && accounts?.data?.length === 0) {
        content = <div>No data found !</div>
      } else if (!isLoading && !isError && accounts?.data?.length > 0) {
          content= accounts?.data.map(account => <Card key={account.id} account={account} />)
      }

    return (
        <div className='bg-[#f5f5f5] h-screen p-7 '>
            <div className='block lg:flex w-full gap-5  '>
                <Chart />
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 w-full lg:w-7/12'>
                    {
                        content
                    }
                    <AddNewAccount/>
                </div>
               
            </div>
        </div>
    );
};

export default Dashboard;