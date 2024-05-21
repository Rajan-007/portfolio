import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import secureseats from "../../Assets/Projects/secureseats.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={secureseats}
              isBlog={false}
              title="Secure seats"
              description=" The Secure Seats uses blockchain to provide tickets as NFTs, ensuring security and transparency. It reduces fraud, provides efficient event management for organizers, and offers a user-friendly platform for attendees to securely purchase and manage tickets.."
              ghLink="https://github.com/Rajan-007/Ticket-Booking-Application"
              demoLink="https://secureseats.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Crop connect"
              description="Building an DAO to help the farmerswith the supplychain management, getting identityand apply for the loans."
              ghLink="https://github.com/Rajan-007/Crop-connect"
              demoLink="https://github.com/Rajan-007/Crop-connect"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Legal guard"
              description="It is a technology that store documentswhich prevents from fraud and ensuring compliance,useful in finance, healthcare, and legal sectors"
              ghLink="https://github.com/Rajan-007/Legal_Guard"
              demoLink="https://github.com/Rajan-007/Legal_Guard"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
