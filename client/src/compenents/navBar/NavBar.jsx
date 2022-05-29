import React from 'react'
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Navbar,Nav} from 'react-bootstrap'
import { useNavigate,Link } from 'react-router-dom'
import { ReactSession }  from 'react-client-session';

const NavBar = () => {
 const navigate = useNavigate();
   const Logout = () =>{
    ReactSession.remove('token')
    navigate('/login')
  }
  return (
<>
<Navbar className='nav-bar' bg="info">
    <Container >
    <Navbar.Brand href="#home" >Frippe online</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link className='nav-list' onClick={Logout}>logout</Nav.Link>
      <Nav.Link as={Link} to={'/addArticle'} className='nav-list'>add article</Nav.Link>
      <Nav.Link href="#features"className='nav-list'>home</Nav.Link>
      <Nav.Link href="#pricing"className='nav-list'>setting</Nav.Link>
      <input className='search-input' type="text" Placeholder="saisir le nom d'un article ou d'un profil" ></input>  

    </Nav>
    </Container>
  </Navbar> 
  
</>
  )
}

export default NavBar
