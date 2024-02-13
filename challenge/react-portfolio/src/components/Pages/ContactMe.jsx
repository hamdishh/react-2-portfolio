import React from "react";
import NavbarEl from "../../components/Navbar";
import { FloatingLabel, Form } from 'react-bootstrap'; // Import FloatingLabel and Form components from react-bootstrap

const Contact = () => {
    return (
        <>
            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Comments</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Leave a comment here" />
            </Form.Group>
        </>
    );
}

export default Contact;
