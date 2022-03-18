import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> </span>
            from <span className="purple"> Godda, Jharkhand, India.</span>
            <br /> I have completed my B.Tech in Information Technology.
            <br /> I am a passionate developer, a quick-learner, avid explorer
            and highly motivated person who is always curious to solve new
            challenges
            <br />I believe this will lay a sturdy foundation to my mushrooming
            career.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Achieve results, not Phases !"{" "}
          </p>
          <footer className="blockquote-footer">Shubham</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
