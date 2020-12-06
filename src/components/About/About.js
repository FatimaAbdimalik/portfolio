import React from "react";
import "../Home/Home.css";
import "./About.css";
import photo from "./../../images/photo.png";
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
        <div>
          <div>
            <h1 className="intro">About Me</h1>
          </div>
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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={photo}
              alt=""
              // style={{
              //   width: "10%",
              //   height: "18%",
              //   // marginLeft: "30rem",
              //   border: "0.5rem solid #3cb371 ",
              // }}
              className="photo"
            />
          </div>
          <div className="centred-text">
            <p>Hi I am Fatima,</p>
            <div style={{ marginBottom: "1rem" }} className="responsive-text">
              Please click
              <a
                href="https://drive.google.com/file/d/1EgSbDKGwFkMA75xhJP1zqyU-Q5B1HDZZ/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                HERE
              </a>{" "}
              to find my CV
            </div>
            <p>
              Welcome to my personal page! Here I will reveal a little more
              about myself, and my journey into tech.
            </p>
            <p>
              I have been coding regularly since March this year. Prior to that,
              I spent more time tutoring, volunteering and blogging.
            </p>
            <p>
              I loved teaching, and almost two years ago, I believed that I will
              do PGCE and be a secondary school mathematics teacher. I loved
              delivering challenging concepts to students, watch them progress
              and gain confidence and always believed that <b>GOOD</b> teachers
              make an <b>EXTRAORDINARY</b> difference to younger generations
              life both academically and personally.
            </p>
            <p>
              However, working at a school is a different story! Students don’t
              <b> REALLY </b>matter. Schools, for many reasons, cater for{" "}
              <b>ANYTHING</b> but <b>INDIVIDUALS' </b> need, and <b>MANY</b>{" "}
              capable students are often <b>FAILED </b>. As a member of the
              teaching staff, all my attempts to intervene were hindered, then I
              <b> QUIT </b>. I didn’t want to contribute to a flawed educational
              system.
            </p>
            <p>
              I didn’t have an insight to what could I do next! My younger
              brother who codes for fun and currently doing his master in
              electrical and electronics engineering introduced coding to me.
              After attending one workshop, I decided to explore it further and
              I <b>LOVED </b>it.
            </p>
            <p>
              Besides spending hours on <b>Free Code Camp </b> and{" "}
              <b>Code Academy</b> and learning fundamentals independently, I
              decided to enrol in a tech school to build a solid foundation and
              get support to start my first tech job. I applied to a couple of
              tech bootcamps here in Manchester. By December 2019 I passed an
              interview at <b>Tech Returns </b>
              and offered a place with a cohort that stared in March. I was
              excited but contemplating waiting for other applications as I was
              eager to start much earlier than March.
            </p>
            <p>
              I was offered a place in <b>Code Your Future </b> at the end of
              January 2020, and as the course was starting in February, one
              month earlier, I decided to enrol in <b>Code Your Future </b> and
              then decide later in March whether to do both or stop one!
            </p>
            <p>
              By the end of March, at the start of the immersion week at{" "}
              <b>Tech Returns </b>, the lockdown started. Uncertain world began
              and the decision that I meant to take regarding studying two
              courses was no longer relevant. I had more time than ever, and
              everything is remote! I decided to study both and make most of my
              time.
            </p>
            <p>
              From both courses, I gained different experiences, made many
              friends and new contacts. One had more focus on problem solving,
              test driven development and cloud technologies such as AWS while
              the other had more focus on personal growth and implementing new
              tech skills in building simple applications. I believe both
              experiences benefited me and made me prepared to start my first
              ever role in tech.
            </p>
            <p>
              Currently, I am looking for my first tech role as a{" "}
              <b>Junior Software Engineer </b>and keen to work within a business
              that is <b>principled </b>, has a <b>mission</b>, and cares about{" "}
              <b>societies' need </b>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
