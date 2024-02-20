import React from "react";
import NavbarEl from "../../components/Navbar";
import { FloatingLabel, Form, Button } from "react-bootstrap"; // Import FloatingLabel and Form components from react-bootstrap

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="form-and-buttons">
      <div className="form-container">
      <FloatingLabel
        controlId="floatingNameInput"
        label="Your Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Your Name" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingEmailInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        {/* <Form.Label></Form.Label> */}
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Leave a message here"
        />
      </Form.Group>
      </div>

      <div className="button-container">
        <Button
          variant="primary"
          size="lg"
          className="button-1"
          href="https://github.com"
        >
          GitHub
        </Button>
      </div>

      <div className="button-container">
        <Button
          variant="primary"
          size="lg"
          className="button-2"
          href="/path-to-cv"
        >
          CV
        </Button>
      </div>

      <div className="button-container">
        <Button
          variant="primary"
          size="lg"
          className="button-3"
          href="https://linkedin.com"
        >
          LinkedIn
        </Button>
      </div>
    </div>
    </div>
  );
};

export default Contact;
