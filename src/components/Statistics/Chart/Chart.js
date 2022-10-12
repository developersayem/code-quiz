import React from 'react'
import { BarChart, Bar,PieChart, Pie, Sector, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

function Chart({data}) {
    const {total,name} = data;

    return (
        <div className='d-flex justify-content-center mt-5 mx-0'>
        <BarChart width={250} height={400} data={data}>
          <Bar dataKey="total" fill="#8884d8" />
          <XAxis dataKey="name"></XAxis>
           <Legend />
          <YAxis></YAxis>
          <Legend />
          <Tooltip />
        </BarChart>
        </div>
    )
}

export default Chart
