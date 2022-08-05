import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectCards2 from "./ProjectCards2";
import Particle from "../Particle";
import bab from "../../Assets/Projects/1bab.jpeg";
import scheider from "../../Assets/Projects/2schneider.jpeg";
import mobil from "../../Assets/Projects/3mobil.jpeg";
import patika from "../../Assets/Projects/4patika.jpg";
import pix from "../../Assets/Projects/5pixtagram.jpeg";
import css from "../../Assets/Projects/6css.jpeg";

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
              imgPath={bab}
              isFigma={true}
              title="IoT Interface"
              description="Preliminary designs of the web application developed for the user side of the products we developed with IoT. UI /UX designs and Front-end development with Vue3.js. (Figma-Zeplin-Photohop-Vue.js-React.js)"
              link="https://www.figma.com/file/XOsh8ifeeAwrQNcpsHTt11/IOT-Firm-Works?node-id=0%3A1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards2
              imgPath={scheider}
              isDisabled={true}
              title="Engineering Interface"
              description="As an external source of Schneider Electric Company, 
              I am making the Front End Designs of the Engineering Programs of this company using with Vue.js technology.(Vue2.js-Bootstrap)
              "
              link=""
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mobil}
              isFigma={true}
              title="Mobil App"
              description="In this App, which I designed with Figma, I made the front-end designs of an information, sharing and friendship application related to plants. My main goal after this design is to develop myself in React Native and move this design to the Mobile Environment."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={patika}
              isFigma={false}
              title="E-Commerce"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pix}
              isFigma={false}
              title="API-Social Media"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={css}
              isFigma={false}
              title="CSS Animations"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
