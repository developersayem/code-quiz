import React from 'react'
import { Link } from 'react-router-dom'
import Hero from "../../Images/Hero.jpg";


function Home() {
    return (
        <div className="d-md-grid container mt-5">
        <div className="row">
         <div className="mt-5 col-md-6">
        <img  src={Hero} className="img-fluid rounded-4 shadow-lg" alt="" />
      </div>
      <div className="mt-5 col-md-6">
        <h1 className='mb-3'>What are CodeQuiz?</h1>
        <p className='text-muted mb-4'>CodeQuiz are programming assessment tools used to objectively evaluate programming skills across parameters such as problem-solving, coding aptitude, and de-bugging.</p>
        <div>
          <button className="btn btn-warning">
            <Link className="text-decoration-none text-white" to="/topics">
              Start Practice
            </Link>
          </button>
        </div>
      </div>
      </div>
    </div>
    )
}

export default Home
