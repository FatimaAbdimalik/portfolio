import React from "react";
import SideBar from "../SideBar/SideBar";
import { Form } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <div className="position">
        <div>
          <SideBar />
        </div>
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
            />
            <input
              placeholder="Email"
              type="text"
              name="email"
              className="input_field"
            />
            <br />
            <input
              placeholder="Subject"
              type="text"
              name="subject"
              className="subject-field"
            />
            <br />
            <textarea name="message" rows="4" cols="50" />
          </div>
          <div>
            <button>SEND</button>
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
