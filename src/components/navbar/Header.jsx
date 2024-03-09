import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar-dark fixed-top px-4" style={{ backgroundColor: '#3e2929' }}>
        <Container>
          <Navbar.Brand href="#home">Joshua Chinwendu</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/projects"}>Projects</Nav.Link>
              <Nav.Link as={Link} to={"/blogs"}>Blogs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header