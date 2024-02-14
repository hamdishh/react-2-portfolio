import React from "react";
import NavbarEl from "../../components/Navbar";
import { FloatingLabel, Form } from 'react-bootstrap'; // Import FloatingLabel and Form components from react-bootstrap

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
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Leave a message here" />
            </Form.Group>
        </div>
    );
}

export default Contact;

