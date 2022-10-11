import React from 'react'
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom'


function Cards({topic}) {
  console.log(topic)
    const {name, logo, total, id} = topic;
    return (
      <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="m-2">
        <Card style={{ width:"15rem"}}>
          <Card.Img className=''style={{backgroundColor: "#F0DB4F"}} variant="top" src={logo} />
          <Card.Body className='bg-dark p-1'>
            <Card.Text className="fs-6 fw-bolder m-0 p-0 text-white">{name}</Card.Text>
            <Card.Text >
              <small className="fw-bolder text-white">Quiz: {total}</small>
            </Card.Text>
            <Link to={`/topics/${id}`} className='btn px-5 mb-2 mt-0 btn-info'>Start</Link>
          </Card.Body>
        </Card>
      </div>
      </div>
     
    )
}

export default Cards
