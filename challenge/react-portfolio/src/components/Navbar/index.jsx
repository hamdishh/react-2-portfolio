import "./style.css";
import { Container, Navbar, Nav } from "react-bootstrap";

function NavbarEl() {
  return (
    <Navbar expand="lg" className="newNav" style={{ width: '100%', position: 'fixed', top: 0, zIndex: 1000 }}>
      <Container>
        <Navbar.Brand href="www.google.com">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarEl;
