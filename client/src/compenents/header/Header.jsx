
import React from "react";


import {Link} from 'react-router-dom'

import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Nav,
    Navbar,
    Container,
} from 'react-bootstrap';

function Header() {

  
  return (
    <>
        <Navbar className='navigationBar'expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Online Fripe</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                <Nav.Link as={Link} to={'/'} >Home</Nav.Link>
                <Nav.Link as={Link} to={'/login'}  >login</Nav.Link>
                <Nav.Link as={Link} to={'/register'} >register</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    
        
</>
  )
}

export default Header