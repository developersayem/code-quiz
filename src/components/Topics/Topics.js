import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Cards from "./Cards/Cards";

function Topics() {
    const leaderData = useLoaderData();
    const topics = leaderData.data;
    return (
        <div className='container grid'>
        <div className='row align-items-center p-5'>
            {
                topics.map(topic => <Cards
                    key={topic.id}
                    topic={topic}
                    ></Cards>)
            }
        </div>
        </div>
    )
}

export default Topics
