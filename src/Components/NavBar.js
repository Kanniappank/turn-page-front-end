import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { retriveData } from '../Services/storage';

function NavBar() {
  const logout = ()=>{
    localStorage.clear();
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container className=''>
        <Navbar.Brand href="#home">Turn Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href='/add-books'>Add Books</Nav.Link> 
            <Nav.Link href="/text-books">Text Books</Nav.Link> 
            <Nav.Link href="/audio-books">Audio Books</Nav.Link>
            <Nav.Link href="/feedback">Feedback</Nav.Link> 
            <Nav.Link href="/login" onClick={()=>logout()}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
