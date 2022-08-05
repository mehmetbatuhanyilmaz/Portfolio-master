import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        <Button variant="secondary" href={props.link} target="_blank" className="mt-2" disabled={true} >
          
          {props.isDisabled ? "Private Code" : "Private Design"}
          
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
