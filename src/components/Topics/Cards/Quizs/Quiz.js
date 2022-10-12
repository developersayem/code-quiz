import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Questions from './Questions/questions';

function Quizs() {
    const [count, setCount] = useState(0);
    const topic = useLoaderData(0);
    const {name,total ,questions}  = topic.data;
    return (
        <div className='container'>
            <div className='my-4'>
                <h2 className='fw-bolder text-info'>Topic: {name}</h2>
                <h6 className='fw-bolder text-muted'>Total {total} Quiz</h6>
                <div className='bg-dark p-5 d-flex justify-content-evenly rounded'>
            <h2 className='text-success'>Corrects: {count}</h2>
            <h2 className='text-danger'>Wrong: {total-count}</h2>
        </div>
            </div>
            <div>
                {
                    questions.map(quest => <Questions 
                        key={quest.id}
                        quest={quest}
                        answer ={[count, setCount]}
                        ></Questions>)
                }
            </div>
        </div>
    )
}

export default Quizs
