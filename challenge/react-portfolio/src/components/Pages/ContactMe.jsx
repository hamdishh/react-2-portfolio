import React from "react";
import NavbarEl from "../../components/Navbar";
import { FloatingLabel, Form, Button } from "react-bootstrap"; // Import FloatingLabel and Form components from react-bootstrap

const Contact = () => {
  return (
    <div className="contact-container">
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
{/* Button for GitHub */}
<div className="btn-box-con">
<Button variant="primary" href="https://github.com" className="me-3 mb-2">
 GitHub
</Button>

 {/* Button for LinkedIn */}
<Button variant="primary" href="https://linkedin.com" className="me-3 mb-2">
 LinkedIn
</Button>

{/* Button for CV */}
<Button variant="primary" href="/path-to-cv" target="_blank" className="me-3 mb-2">
    CV
    </Button>
 </div>
 </div>
  );
};

export default Contact;
