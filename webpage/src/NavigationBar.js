import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavigationBar() {
    return (
        <div>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">Nolan Ferguson</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="Projects">
                  
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
}