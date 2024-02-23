import "./style.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import partyImg from "../../images/party.png";
import "../../fonts/font.css";
function NavbarEl() {
  return (
    <Navbar
      expand="lg"
      className="newNav"
      style={{
        width: "100%",
        position: "fixed",
        top: 0,
        zIndex: 1000,
        fontFamily: "shine-font",
      }}
    >
      <Container>
        <Navbar.Brand href="www.google.com">
          Hamdi
          <img
            src={partyImg}
            alt="Disco Icon"
            style={{ marginLeft: "5px", height: "34px", marginTop: "-36px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarEl;
