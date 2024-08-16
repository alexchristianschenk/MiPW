import { Link } from 'react-router-dom';
import './Bnadvar.css';


import { Navbar, Nav, NavDropdown, Button  } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';



function Bnadvar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/busqueda">Buscador de Lugares</Nav.Link>
            <Nav.Link as={Link} to="/formulariol">Formulario</Nav.Link>
            <Nav.Link as={Link} to="/AboutUs">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/Cartas">Lugares Recomendados</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Bnadvar


