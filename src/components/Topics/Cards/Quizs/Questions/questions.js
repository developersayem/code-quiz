import React from 'react'
import { EyeIcon } from '@heroicons/react/24/solid'
import  { useState } from 'react';

function Questions({quest,answer}) {
    const [isActive, setActive] = useState(false);
    const [isCorrect, setCorrect] = useState(true);

    const[count, setCount]=answer;

const CorrectAnswer = () => {
    setActive(!isActive);
  };

    const {question,correctAnswer,options} = quest;


const questtionChack = (q) => {
if(q === correctAnswer){
   setCount(count + 1)
    console.log(count)
    alert("The Answer is Correct");
    setCorrect(!isCorrect)
}else{
    alert("The Answer is Wrong");
    setCorrect(!isCorrect)
}
}

    return (
        <div>
        
            <div className='bg-dark text-white rounded-5 py-4 px-3 m-5'>
                 <h4 className='pb-4 text-danger'>{question}</h4>
                {
                    options.map(option =>{
                      return <div className='d-flex align-content-center justify-content-center'>
                        <div className={isCorrect ? "d-block w-75" : "d-none w-75"}>
                        <button onClick={()=>questtionChack(option)} className='btn btn-outline-info text-white m-2 p-2 w-100'>{option}</button>
                        </div>
                        </div>
                    })
                }
                <div className={isActive ? "d-block" : "d-none"}>
                <p className='text-success mt-2'> CorrectAnswer: {correctAnswer}</p></div>
                <EyeIcon onClick={CorrectAnswer} style={{width:"2rem"}} className="mt-3 text-blue-500"/>
            </div>
        </div>
    )
};

export default Questions;


