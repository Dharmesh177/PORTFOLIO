import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgTime, CgWebsite } from "react-icons/cg";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Expcard(props) {
  return (
    <Card className="project-card-view">
     
      <Card.Body>
        <Card.Title>
        <div class="capp d-flex justify-content-between">
        <div class="purple"><strong>{props.title}</strong></div>
        <div class="purple"><strong>
        {props.com}</strong></div>
        <div><Button variant="primary" href="#" target="_blank">
        <CgTime /> &nbsp;
        {props.time}
      </Button></div>
     

        </div></Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" className="btn btn-primary mb-4" href={props.ghLink} target="_blank">
          <BsLinkedin /> &nbsp;
          {props.isBlog ? "Blog" : "Linkedin"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Certificate"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default Expcard;
