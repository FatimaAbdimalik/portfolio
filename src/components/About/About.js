import React from "react";
import "../Home/Home.css";
import "./About.css";
import photo from "./../../images/photo.png";

const About = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <h1 className="title">About Me</h1>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={photo} alt="" className="photo" />
          </div>
          <div className="responsive-text">
            <p>
              Hi I am <b>Fatima</b>
            </p>
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
          <div className="centred-text">
            <p>
              Welcome to my personal page! Here I will reveal a little more
              about myself, and my journey into tech.
            </p>
            <p>
              I have been coding regularly since March this year. For the last
              nine months, I learnt the fundamentals of programming including
              <strong> HTML, CSS, and Bootstrap</strong> . I have strengthened
              my understanding of <strong> JavaScript </strong> and utilised{" "}
              <strong>ReactJs </strong> to create simple applications. I have
              also learnt and utilised many backend technologies such as{" "}
              <strong>PostgreSQL, MySQL and Node.js</strong>
            </p>
            <p>
              {" "}
              Prior to that, I spent my time tutoring, volunteering and
              blogging.
            </p>
            <p>
              I loved teaching, and almost two years ago, I believed that I
              would study for PGCE and became a secondary school mathematics
              teacher. I loved breaking down challenging concepts to students,
              watching them progress and gain confidence and always believed
              that <b>GOOD</b> teachers make an <b>EXTRAORDINARY</b> difference
              to younger generations life both academically and personally.
            </p>
            <p>
              However, working at a school was a different story! I discovered
              that students were not the
              <b> Priority </b>. Schools, for many reasons, cater for{" "}
              <b>ANYTHING</b> but <b>INDIVIDUALS' </b> need, and <b>MANY</b>{" "}
              capable students are often <b>FAILED </b>. As a staff member, all
              my attempts to bring change were hindered, then I<b> QUIT </b>. I
              didn’t want to contribute to a flawed educational system.
            </p>
            <p>
              Although I was ready to take on a new challenge I was not sure
              where to begin! My younger brother who codes for fun introduced
              coding to me. After attending a workshop, I decided to explore it
              further and I found that I <b>LOVED </b>it.
            </p>
            <p>
              Aside from spending hours on <b>Free Code Camp </b> and{" "}
              <b>Code Academy</b> and learning fundamentals independently, I
              decided to enrol in a tech school to build a solid foundation and
              get support to start my first tech job. I applied to a couple of
              tech bootcamps here in Manchester. By December 2019 I passed an
              interview at <b>Tech Returns </b>
              and offered a place with a cohort that began in March. I was
              excited but contemplated some of other applications I had made as
              I was eager to start much earlier than March.
            </p>
            <p>
              I was offered a place in <b>Code Your Future </b> at the end of
              January 2020, and as the course was starting in February, one
              month earlier, I decided to enrol in <b>Code Your Future </b> and
              then decide later in March whether to do one or both!
            </p>
            <p>
              By the end of March, at the start of the immersion week at{" "}
              <b>Tech Returns </b>,lockdown was in effect. During this period I
              found that I had lots of more time and decided that since
              everything was remote anyway I could study both and make most of
              my time.
            </p>
            <p>
              From both courses, I gained a variety of experiences, made many
              friends and grew my newwork. One had more focus on problem
              solving, test driven development and cloud technologies such as
              AWS whilst the other had emphasised personal growth and
              implementing new tech skills when building simple applications. I
              believe both experiences were valuable and prepared me to take on
              my first tech role.
            </p>
            <p>
              Currently, I am looking for a position as a{" "}
              <b>Junior Software Engineer </b>and keen to work within a business
              that is <b>principled </b>, has a <b>mission</b>, and cares about{" "}
              <b>societies' needs </b>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
