import React from "react";
import "../Home/Home.css";
import "./About.css";
// import { Button, Modal } from "react-bootstrap";

const About = () => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => {
  //   return setShow(false);
  // };
  // const handleShow = () => {
  //   return setShow(true);
  // };

  return (
    <div>
      <div>
        <div className="intro">
          <div className="side-by-side">
            <div>
              <h1>About Me</h1>
              {/* <Button
                variant="secondary"
                onClick={handleShow}
                style={{
                  backgroundColor: "black",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
              >
                Resume{" "}
              </Button>
              <Modal
                show={show}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <div className="background">
                  <Modal.Header closeButton>
                    <Modal.Title>Employment/Work Experience</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="timeline">
                      <div className="container left">
                        <div className="resume_container">
                          <h2>Feb 2020 - Oct 2020</h2>
                          <p>Software Trainee at CYF.</p>
                        </div>
                      </div>
                      <div className="container right">
                        <div className="resume_container">
                          <h2>Mar 2020 - July 2020</h2>
                          <p>Software Developer at Tech Returners</p>
                        </div>
                      </div>
                      <div className="container left">
                        <div className="resume_container">
                          <h2>Aug 2018 - Present</h2>
                          <p>Private Tutor.</p>
                        </div>
                      </div>
                      <div className="container right">
                        <div className="resume_container">
                          <h2>Sep 2015 - July 2020</h2>
                          <p>Teaching Assistant</p>
                        </div>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={handleClose}
                      style={{ backgroundColor: "black" }}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </div>
              </Modal> */}
              <p>I am a passionat and committed person.</p>
              <p>
                A proactive, resourceful probelm solver that thrives on
                challenges{" "}
              </p>
              <p>
                Enthusiastic, driven and keen to embark on a career as a
                software developer.
              </p>
              Please Click on{" "}
              <a
                href="https://drive.google.com/file/d/1EgSbDKGwFkMA75xhJP1zqyU-Q5B1HDZZ/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                this
              </a>{" "}
              to find my CV
              {/* <a></a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
