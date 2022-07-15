import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/amazon.png";
import emotion from "../../Assets/Projects/csc.png";
import editor from "../../Assets/Projects/stuhelp.png";
import chatify from "../../Assets/Projects/scholarhome.png";
import suicide from "../../Assets/Projects/uni.png";
import bitsOfCode from "../../Assets/Projects/mnm.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Scholar"
              description="Scholar is a Single platform of all the national and international Scholarships. Also All their is Admin Panel from their various Govrnment Agency, Organization and NGO's can add or update Scholarships Data. This MERN Stack Project is my Team Project for Smart India Hackathon - 2022 "
              ghLink="https://github.com/tanktejas/scholarhome"
              demoLink="https://scholarhome.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="MNM"
              description="My Friend has NGO to help the voiceless animals and poor people through social camps. For them I have Created Website using HTML, CSS, JS as front-end and PHP and MySQL as backend and database respectively. Manavta ni mahek has many feature including Donation using RazorPay Gateway, About Us, Member Form etc."
              ghLink="https://github.com/Dharmesh177/MNM"
              demoLink="manavta-ni-mahek.000webhostapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="STUHELP"
              description="a Student Activity management system bulit with modern front-end framework React-JS, Bootstrap , Back-end with Node-JS, Express-JS and Data-base stored at Firebase. Stuhelp has many Feature like Dynamic Courses / Compitition, Teacher Panel, Result, Student/Admin Login etc."
              ghLink="https://github.com/tanktejas/hackathon"
              demoLink="https://stuhelp-by-tejas-and-dharmesh.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="AMAZON CLONE"
              description="My First React Project bulit using React-JS, Node-JS, Redux and Firebase. It's very similar to amazon official web application. I have included many feature like Order History Page, Cart and Checkout, User Authentication, Payment Gateway using Stripe etc."
              
              demoLink="https://clone-16e61.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="EDUFORD"
              description="This is the first website that I created using HTML CSS from youtube. from this website, I learned many things about web development. This is a completely responsive website without the use of any framework."
              ghLink="https://github.com/Dharmesh177/UNIVERCITY-WEBSITE"
               demoLink="https://dharmesh177.github.io/UNIVERCITY-WEBSITE/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="CSCODETECH"
              description="CSCODETECH is Web and Mobile Development based company located at SUrat where I do my Internship in Summer - 2022 where I have been bulit Service Website Using React-JS, Node-JS and Deployed at Firebase."
              ghLink="https://github.com/Dharmesh177/CSCODETECH_INTERNSHIP"
               demoLink="https://cscodetech.vercel.app"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
