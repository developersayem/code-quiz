import React from 'react'

function Blog() {
    return (
        <div className='container'>
            <h1 className='my-4'>Some react router Questions & Answers</h1>
            <div className='bg-dark p-5 my-5 rounded'>
                <h2 className='text-danger fw-bolder'>Q1: What is purpose of react router?</h2>
                <p className='text-muted fw-bold'><span className='text-success'>Answer:</span> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div className='bg-dark p-5 my-5 rounded'>
                <h2 className='text-danger fw-bolder'>Q1: How does context api works?</h2>
                <p className='text-muted fw-bold'><span className='text-success'>Answer:</span> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='bg-dark p-5 my-5 rounded'>
                <h2 className='text-danger fw-bolder'>Q1: What useRef in react router </h2>
                <p className='text-muted fw-bold'><span className='text-success'>Answer:</span> The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>
        </div>
    )
}

export default Blog
