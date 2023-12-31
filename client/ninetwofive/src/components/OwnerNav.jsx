import {Container,Nav,Navbar} from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import useAuth from '../hooks/useAuth.js'

export const OwnerNav =() =>{
  const { auth, setAuth } = useAuth();
  const handleLogout = () => {
    setAuth({});
    localStorage.removeItem('accessToken');
  };
  return(
    <div className="Main">
    <Navbar expand="lg" className="navbar navbar-dark bg-dark" >
    <Container>
      <Navbar.Brand>NineTwoFive</Navbar.Brand>

      {auth.user && <Navbar.Brand>{"Hello, " +auth.user.username}</Navbar.Brand>}

      <Navbar.Brand as={NavLink} to="/Home" onClick={handleLogout}>· התנתקות ·</Navbar.Brand>
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
