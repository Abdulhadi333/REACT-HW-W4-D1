import React from 'react'
// import { Link } from "react-router-dom";
import {Navbar,Container,Nav  } from 'react-bootstrap';

export default function Header() {
  return (
    <div>
        
     <Navbar bg="secondary" variant="dark" className="mt-0 mb-2">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link href="/home">Home</Nav.Link>
    {/* <div>
        
        {true ? <div>
            admin@hotmail.com
            {"  "}
            <button className='btn btn-danger btn-sm'>Logout</button>
        </div> : 'You need Login'}
    </div> */}
    </Nav>
    </Container>
  </Navbar>
  
    </div>
  )
}
