import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rajan </span>
            from <span className="purple"> chennai, India.</span>
            <br />
            I am currently employed as a software developer at Gryffindors.
            <br />
            I have completed Computer Science and Engineering (BE)  at Jaya Engineering College,Chennai.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exercising 
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Self development Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that the world needs!"{" "}
          </p>
          <footer className="blockquote-footer">Rajan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
