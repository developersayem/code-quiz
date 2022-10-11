import React from 'react'
import { Link } from 'react-router-dom'
import Hero from "../../Images/Hero.jpg";


function Home() {
    return (
        <div className="d-md-flex m-5 pt-md-5">
      <div className="w-50 d-flex flex-column align-content-center justify-content-center me-5 mt-5">
        <h1 className='mb-3'>What are QuizCode?</h1>
        <p className='text-muted mb-4'>QuizCode are programming assessment tools used to objectively evaluate programming skills across parameters such as problem-solving, coding aptitude, and de-bugging.</p>
        <div>
          <button className="btn btn-warning">
            <Link className="text-decoration-none text-white" to="/topics">
              Start Practice
            </Link>
          </button>
        </div>
      </div>
      <div className="w-50 mt-5">
        <img src={Hero} className="img-fluid rounded-4 shadow-lg" alt="" />
      </div>
    </div>
    )
}

export default Home
