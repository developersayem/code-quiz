import React from 'react'
import { EyeIcon } from '@heroicons/react/24/solid'
import  { useState } from 'react';

function Questions({quest}) {
    const [isActive, setActive] = useState(false);


const CorrectAnswer = () => {
    setActive(!isActive);
    console.log(isActive)
  };

    const {question,correctAnswer,options} = quest;
    return (
        <div>
            <div className='bg-dark text-white rounded-5 py-4 px-3 m-5'>
                 <h4 className='pb-4 text-danger'>{question}</h4>
                {
                    options.map(option =>{
                      return <div className='d-flex align-content-center justify-content-center'>
                        <div className='bg-info text-white rounded m-2 w-25'>
                        <button className='btn btn-info text-white'>{option}</button>
                        </div>
                        </div>
                    })
                }
                <div className={isActive ? "d-block" : "d-none"}>
                <p className='text-success mt-2'> CorrectAnswer: {correctAnswer}</p></div>
                <EyeIcon onClick={CorrectAnswer} style={{width:"2rem"}} className=" mt-3 text-blue-500"/>
            </div>
        </div>
    )
};

export default Questions;


