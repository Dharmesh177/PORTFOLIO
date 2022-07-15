import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/amazon.png";
import emotion from "../../Assets/Projects/csc.png";
import editor from "../../Assets/Projects/stuhelp.png";
import chatify from "../../Assets/Projects/scholarhome.png";
import suicide from "../../Assets/Projects/uni.png";
import bitsOfCode from "../../Assets/Projects/mnm.png";
import Expcard from "./Expcard";

function Exp() {
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
          <Col md={8} className="project-card">
            <Expcard
              imgPath={chatify}
              isBlog={false}
              com={"CSCODETECH"}
              time={"May 2022 - June 2022"}
              title="React-JS Developer"
              description="I have completed my summer internship of 1 month at CSCODETECH Located at Surat Work From Office. I has been assigned one task which consist of Full Stack Service Website for CSCODETECH. I have learned many functionality of React and Learn How bootstrap work in Industry? through out my training Period."
              ghLink="https://www.linkedin.com/company/cscodetech/"
              demoLink="https://www.linkedin.com/in/dharmesh-vala-252724204/overlay/1635494883147/single-media-viewer/"
            />
          </Col>

          <Col md={8} className="project-card">
            <Expcard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Open Source Contributor"
              com={"GirlScript Foundation"}
              time={"March 2022 - May 2022"}
              description="I has been selected as Open Source Contributor in GSSOC-2022 Organised by Girlscript Foundation. In my 3 month of Journey of Open Source Contribution I have made many contribution to existing and provided project by GSSOC. In this time I have learned many new things about Open Source / Github and Web technologies also Team Work."
              ghLink="https://www.linkedin.com/company/girlscriptsoc/"
              demoLink="#"
            />
          </Col>

          <Col md={8} className="project-card">
            <Expcard
              imgPath={editor}
              isBlog={false}
              title="Smart India Hackathon"
              com={"AICTE"}
              time={"March 2022 - July 2022"}
              description="a Student Activity management system bulit with modern front-end framework React-JS, Bootstrap , Back-end with Node-JS, Express-JS and Data-base stored at Firebase. Stuhelp has many Feature like Dynamic Courses / Compitition, Teacher Panel, Result, Student/Admin Login etc."
              ghLink="#"
              demoLink="#"              
            />
          </Col>

        

         
        </Row>
      </Container>
    </Container>
  );
}

export default Exp;
