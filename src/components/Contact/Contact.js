import React, { useState } from "react";
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
      <div className="position">
        <div>{/* <SideBar /> */}</div>
        <div className="intro">
          <div>
            <h1>Contact Me</h1>
          </div>
          <div>
            <input
              placeholder="Name"
              type="text"
              name="name"
              className="input_field"
              value={value.name}
              onChange={handleFieldChange}
            />
            <input
              placeholder="Email"
              type="text"
              name="email"
              value={value.email}
              className="input_field"
              onChange={handleFieldChange}
            />
            <br />
            <input
              placeholder="Subject"
              type="text"
              name="subject"
              value={value.subject}
              className="subject-field"
              onChange={handleFieldChange}
            />
            <br />
            <textarea
              name="message"
              value={value.message}
              rows="4"
              cols="50"
              onChange={handleFieldChange}
            />
          </div>
          <div>
            <button onClick={handleClick}>SEND</button>
          </div>
          {/* <Form>
            <Form.Group controlId="name">
              <Form.Control type="name" placeholder="name" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="subject">
              <Form.Control type="subject" placeholder="subject" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows="3" col="5" />
            </Form.Group>
          </Form> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
