import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function Navbarr() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={NavLink}>Home</Nav.Link>
            <Nav.Link href="#action2" as={NavLink}>About</Nav.Link>
            <NavDropdown title="Our Products" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" as={NavLink}>Product 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Product 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              Product 3
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2" as={NavLink}>Contact Us</Nav.Link>
           
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;