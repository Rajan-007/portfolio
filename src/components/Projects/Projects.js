import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/about.png";
import secureseats from "../../Assets/Projects/secureseats.png";
import cropconnect from "../../Assets/Projects/cropconnect.png";
import VictoryConnect from "../../Assets/Projects/Victoryconnect.png";
import myguruplus from "../../Assets/Projects/myguruplus.jpg";

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
              imgPath={VictoryConnect}
              isBlog={false}
              title="Victory connect"
              description=" VictoryConnect is a dynamic platform designed to connect business professionals, fostering collaboration and networking opportunities. "
              ghLink="https://github.com/Rajan-007/Community_Management"
              demoLink="https://github.com/Rajan-007/Community_Management"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cropconnect}
              isBlog={false}
              title="Crop Connect"
              description="Building an DAO to help the farmerswith the supplychain management, getting identityand apply for the loans."
              ghLink="https://github.com/Rajan-007/Crop-Connect"
              demoLink="https://green-dao-icp.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myguruplus}
              isBlog={false}
              title="myguruplus"
              description="Building an platform to help the TNPSC students to practice the questions in the quiz and score were shown"
              ghLink="https://github.com/Rajan-007/Myguruplus"
              demoLink="https://www.myguruplus.com/"
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
