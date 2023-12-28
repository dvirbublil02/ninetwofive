import {Container,Nav,Navbar} from "react-bootstrap";
import {NavLink} from 'react-router-dom';

export const OwnerNav =() =>{
  return(
    <div className="Main">
    <Navbar expand="lg" className="navbar navbar-dark bg-dark" >
    <Container>
      <Navbar.Brand>NineTwoFive</Navbar.Brand>
      <Navbar.Brand as={NavLink} to="/Home">· התנתקות ·</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto ">
          <Nav.Link as={NavLink} to="/Add">· הוספת פריטים ·</Nav.Link>
          <Nav.Link as={NavLink} to="/Remove">· הסרת פריטים ·</Nav.Link>
          <Nav.Link as={NavLink} to="/Edit">· עדכון פריטים ·</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
    </div>
  );
};
