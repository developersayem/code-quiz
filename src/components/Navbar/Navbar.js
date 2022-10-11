import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className=''>
            <div className='bg-dark d-flex align-content-center justify-content-between'>
            <div className='p-2 ps-5'>
            <Link className='text-decoration-none fs-3 text-warning' to ="/">QuizCode</Link>
           </div>
           <div className='p-2 pe-5 me-3 d-flex align-content-center'>
            <Link className='text-decoration-none text-warning m-2' to="/home">Home</Link>
            <Link className='text-decoration-none text-warning m-2' to="/tests">Tests</Link>
            <Link className='text-decoration-none text-warning m-2' to="/statistics">Statistics</Link>
            <Link className='text-decoration-none text-warning m-2' to="/blog">Blog</Link>
           </div>
        </div>
        </div>
       
    )
}

export default Navbar
