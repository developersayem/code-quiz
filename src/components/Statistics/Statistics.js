import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar,PieChart, Pie, Sector, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';



function Statistics() {
    const topics = useLoaderData();
    const data = topics.data;
    const {total,name} = data;
    console.log(data)
    return (
        <div className='d-flex flex-column justify-content-center align-content-center'>
        <div>
        <h2 className='text-info fw-bolder'>Quiz Quantity Chart</h2>
        </div>
        <div className='mx-5 px-5 mt-5'>
        <div className='mx-5 px-5'>
        <div className='mx-5 px-4 mt-3'>
        <BarChart className='mx-5 px-5' width={500} height={400} data={data}>
          <Bar dataKey="total" fill="#8884d8" />
          <XAxis dataKey="name"></XAxis>
           <Legend />
          <YAxis></YAxis>
          <Legend />
          <Tooltip />
        </BarChart>
        </div>
        </div>
        </div>
        </div>

    )
}

export default Statistics
