// import React from "react";
import { Container } from "react-bootstrap";
import "../../fonts/font.css";

function FooterEl() {
  return (
    <footer
      className="footer py-3"
      style={{ fontFamily: "shine-font", color: "#F4BF96" }}
    >
      <Container className="text-center">
        <p>Made with ❤️ by Hamdi</p>
      </Container>
    </footer>
  );
}

export default FooterEl;
