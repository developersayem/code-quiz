import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Chart from './Chart/Chart';




function Statistics() {
    const topics = useLoaderData();
    const data = topics.data;
    return (
        <div>
        <div className='mt-5'>
          <h2>ALl Quizs in charts</h2>
        </div>
          <Chart data={data} ></Chart>
        </div>
    )
}

export default Statistics
