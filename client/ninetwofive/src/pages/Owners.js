import { Footer } from "../components/MainFooter";
import {Container,Nav,Navbar} from "react-bootstrap";
import {NavLink} from 'react-router-dom';

export const Owners =() =>{
  return(
      
        <div className="Main">
        <Navbar expand="lg" className="navbar navbar-dark bg-dark" >
        <Container>
          <Navbar.Brand>NineTwoFive</Navbar.Brand>
          <Navbar.Brand as={NavLink} to="/Home">· התנתקות ·</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link as={NavLink} to="/Watches">· הוספת פריטים ·</Nav.Link>
              <Nav.Link as={NavLink} to="/Watches">· הסרת פריטים ·</Nav.Link>
              <Nav.Link as={NavLink} to="/Watches">· עדכון פריטים ·</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
      
      <Footer />
    </div>
    );
  };
  