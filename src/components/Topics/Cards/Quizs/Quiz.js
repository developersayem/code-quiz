import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Questions from './Questions/questions';

function Quizs() {
    const topic = useLoaderData();
    console.log(topic);
    const {name,total ,questions}  = topic.data;
    return (
        <div className='container'>
            <div className='my-4'>
                <h2 className='fw-bolder text-info'>Topic: {name}</h2>
                <h6 className='fw-bolder text-muted'>{total} Quiz</h6>
            </div>
            <div>
                {
                    questions.map(quest => <Questions 
                        key={quest.id}
                        quest={quest}
                        ></Questions>)
                }
            </div>
        </div>
    )
}

export default Quizs
