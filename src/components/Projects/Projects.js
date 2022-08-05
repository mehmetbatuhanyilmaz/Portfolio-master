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
              description="In this App, which I designed with Figma,
               I made the front-end designs of an information, sharing and friendship application related to plants. 
               The next step is to develop React Native and move this design to the Mobile Environment."
              link="https://www.figma.com/file/pawyhKbiaCJQiGM7z6WZXd/Mobile-UI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={patika}
              isFigma={false}
              title="E-Commerce"
              description="Together with my teammate Ogün Demirkıran, we designed and coded the Kraft.co E-Commerce page, which we developed using React.js technology."
              link="https://github.com/mehmetbatuhanyilmaz/patika-frontend-projects"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pix}
              isFigma={false}
              title="API-Social Media"
              description="It is an individual work that I have done with data extraction and visualization using API."
              link="https://github.com/mehmetbatuhanyilmaz/Decathlon-PIXtagram-React-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards2
              imgPath={css}
              isDisabled={true}
              title="CSS Animations"
              description="I got an animated interface work using CSS Animations."
              link="https://github.com/mehmetbatuhanyilmaz/JUSTDesign"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
