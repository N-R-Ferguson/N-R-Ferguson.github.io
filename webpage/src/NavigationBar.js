// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// export default function NavigationBar() {
//     return (
//         <div>
//         <Navbar expand="lg" sticky="top" >
//           <Container fluid>
//             <Navbar.Brand href="#home">Nolan Ferguson</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse>
//               <Nav>
//                 <Nav.Link href="#home">Home</Nav.Link>
//                 <NavDropdown title="Projects">
//                   <NavDropdown.Item >Project 1</NavDropdown.Item>
//                   <NavDropdown.Item >Project 2</NavDropdown.Item>
//                   <NavDropdown.Item >Project 3</NavDropdown.Item>
//                   <NavDropdown.Item >Project 4</NavDropdown.Item>
//                 </NavDropdown>
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>
//       </div>
//     )
// }

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './NavigationBar.css';
export default function NavigationBar() {
  return (
    <div className='app-header'>
    <Navbar expand="lg" sticky="top" >
      <Container className='navbar-horizontal'>
        <Navbar.Brand href="/">Nolan Ferguson</Navbar.Brand>
        <Navbar.Toggle variant="success" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href='/' >Home</Nav.Link>
            <NavDropdown title="Projects" className='navedropdown-vertical'>
              <NavDropdown.Item href="https://github.com/N-R-Ferguson/NLP">Natural Language Processing</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/N-R-Ferguson/GreenHarborMetals">Green Harbor Metals</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/N-R-Ferguson/Engineering-Solutions-Final-Team-Project">MLB Fantasy Draft</NavDropdown.Item>
              <NavDropdown.Item >Project 4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}