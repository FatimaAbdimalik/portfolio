import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
const Contact = ({ baseUrl }) => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleClick = () => {
    axios
      .post(`${baseUrl}/employers`, {
        name: value.name,
        email: value.email,
        subject: value.subject,
        message: value.message,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    alert("You've sent your message. Thank you");
  };

  const handleFieldChange = (e) => {
    const updateField = {
      ...value,
      [e.target.name]: e.target.value,
    };
    setValue(updateField);
    // console.log(value);
  };

  return (
    <div>
      <div>
        <div className="intro">
          <div>
            <h1>Contact Me</h1>
          </div>
          <div>
            <Form>
              <Form.Group controlId="name">
                <Form.Control
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={value.name}
                  onChange={handleFieldChange}
                />
              </Form.Group>
              <Form.Control
                placeholder="Email"
                type="text"
                name="email"
                value={value.email}
                onChange={handleFieldChange}
              />
              <br />
              <Form.Control
                placeholder="Subject"
                type="text"
                name="subject"
                value={value.subject}
                onChange={handleFieldChange}
              />
              <br />
              <Form.Control
                name="message"
                placeholder="message"
                value={value.message}
                rows="4"
                cols="50"
                onChange={handleFieldChange}
                as="textarea"
              />
            </Form>
          </div>
          <div>
            <Button
              onClick={handleClick}
              variant="secondary"
              style={{ backgroundColor: "black", marginTop: "1rem" }}
            >
              SEND
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
