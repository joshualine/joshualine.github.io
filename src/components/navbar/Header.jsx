import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar-dark fixed-top px-4" style={{ backgroundColor: '#3e2929' }}>
        {/* bg-body-tertiary */}
        <Container>
          <Navbar.Brand href="#home">Joshua Chinwendu</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Projects</Nav.Link>
              <Nav.Link href="#link">Blogs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header