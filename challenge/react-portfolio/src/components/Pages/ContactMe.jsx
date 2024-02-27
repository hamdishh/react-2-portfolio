import React, { useState } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import cvImg from "../../resume/1stcv.jpeg"

const ContactMe = () => {
  const [formData, setFormData] = useState({
    //setting variables with useState hookk
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    //handleChnage function handles the change in input from user
    const { name, value } = e.target; //extract the values from targetted event
    setFormData({
      ...formData, //formData stores the form data (so the users, name email address and message that thye want to send)
      [name]: value, //updates the formDatas state with the new value which is name/email
    });
  };

  const handleSubmit = (e) => {
    //handles submission of form
    e.preventDefault(); //to prevent the forms default behavior which inn this case would be to refresh the page

    let formErrors = {};
    if (!formData.name.trim()) {
      //if name form is empty then message is displayed
      formErrors.name = "Name is Required";
    }
    if (!formData.email.trim()) {
      formErrors.email = "Email is required"; //if email form is empty then message is displayed
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) {
      formErrors.message = "Message is required";
    }

    if (Object.keys(formErrors).length === 0) {
      const emailSubject = encodeURIComponent(
        "Message from Portfolio Contact Form"
      );
      const emailBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
      );
      const mailtoLink = `mailto:${formData.email}?subject=${emailSubject}&body=${emailBody}`;

      window.location.href = mailtoLink;
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section className="contact-container">
      <div className="form-and-buttons">
        <div className="form-container">
          <FloatingLabel
            controlId="floatingNameInput"
            label="Your Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
          </FloatingLabel>
          {errors.name && <p className="error-message">{errors.name}</p>}

          <FloatingLabel
            controlId="floatingEmailInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your email"
            />
          </FloatingLabel>
          {errors.email && <p className="error-message">{errors.email}</p>}

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Leave a message here"
            />
          </Form.Group>
          {errors.message && <p className="error-message">{errors.message}</p>}

          <Button
            variant="primary"
            size="lg"
            type="submit"
            onClick={handleSubmit}
            style={{
              backgroundImage: "linear-gradient(to right, #F4BF96, #CE5A67)",
              border: "1px solid #1F1717",
              color: "white",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Submit
          </Button>
        </div>

        <div className="button-container" style={{ marginLeft: "947px" }}>
          <Button
            variant="secondary"
            href="https://github.com"
            target="_blank"
            className="col-4 mb-2"
          >
            GitHub
          </Button>
          <Button
            variant="secondary"
            href= {cvImg}
            target="_blank"
            className="col-4 mb-2"
          >
            CV/Resume
          </Button>
          <Button
            variant="secondary"
            href="https://www.linkedin.com/in/hamdi-sheikhabdullahi-299ab22b6/"
            target="_blank"
            className="col-4 mb-2"
          >
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
