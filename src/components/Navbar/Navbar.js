import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

function BasicExample() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container className='position-relative'>
        <Navbar.Brand>
        <Link className='text-decoration-none fs-3 text-warning' to ="/">QuizCode</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" d-flex justify-content-end bg-dark rounded w-100" style={{zIndex:"999"}}>
            <Link className='text-decoration-none text-warning m-2' to="/home">Home</Link>
            <Link className='text-decoration-none text-warning m-2' to="/topics">Topics</Link>
            <Link className='text-decoration-none text-warning m-2' to="/statistics">Statistics</Link>
            <Link className='text-decoration-none text-warning m-2' to="/blog">Blog</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
