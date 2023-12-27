import {Container,Nav,Navbar} from "react-bootstrap";
import {NavLink} from 'react-router-dom';

export const Navibar =() =>{
  return(
      <Navbar expand="lg" className="navbar navbar-dark bg-dark" >
      <Container>
        <Navbar.Brand as={NavLink} to="/Home">NineTwoFive</Navbar.Brand>
        <Navbar.Brand as={NavLink} to="/Login">·  התחברות ·</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link as={NavLink} to="/Cart" style={{ color: 'orange' } }>· סל קניות ·</Nav.Link>
            <Nav.Link as={NavLink} to="/Watches">· שעונים ·</Nav.Link>
            <Nav.Link as={NavLink} to="/Rings">· טבעות ·</Nav.Link>
            <Nav.Link as={NavLink} to="/Bracelets">· צמידים ·</Nav.Link>
            <Nav.Link as={NavLink} to="/Necklace">· שרשראות ·</Nav.Link>
            <Nav.Link as={NavLink} to="/Earing">· עגילים ·</Nav.Link>
            <Nav.Link as={NavLink} to="/Home" style={{ color: 'white' }}>דף הבית</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
  );
};
