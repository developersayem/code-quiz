import React from 'react'
import { Link } from 'react-router-dom'
import error from "../../Images/error.jpg";


function Errorpage() {
    return (
        <div className='container m-5'>
           <div className='d-flex align-content-center'>
           <div className='mt-5 pt-5 me-5 w-75'>
            <h1 className='d-flex fw-bolder'>Oops! You ran out of Oxygen.</h1>
            <p className='d-flex fw-bolder'>The page you're looking for now beyond our reach.</p>
            <p className='d-flex fw-bolder'>Let's get you...</p>
           </div>
           <div className='w-50 mt-5 pt-5'>
            <img className='img-fluid' src={error} alt=""/>
           </div>
           </div>
           <Link to="/" className='btn btn-info m-5 text-white fw-bolder'> Back To Home</Link>
           </div>
    )
}

export default Errorpage
