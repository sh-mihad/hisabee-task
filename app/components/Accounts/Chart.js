import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const Chart = () => {
    return (
        <div className='bg-white p-5 text-center rounded-lg w-full my-4 lg:w-4/12 max-h-[300px]'>
            <p>Total Balance</p>
            <h4 className='text-2xl font-semibold'>৳ 12500</h4>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="30%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>

            </PieChart>
        </div>
    );
};

export default Chart;