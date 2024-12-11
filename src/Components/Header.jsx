import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>

      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <Link to={'/'} style={{textDecoration:"none"}}>
            <i className="fa-solid fa-upload fs-3 me-2" style={{color: "#74C0FC",}} />
            MEDIA PLAYER   
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>

    </>
  )
}

export default Header