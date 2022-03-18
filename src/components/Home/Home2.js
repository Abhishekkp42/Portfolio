import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import laptopImg from "../../Assets/about.png";
import Aboutcard from "../About/AboutCard";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaLinkedinIn } from "react-icons/fa";
import TransitionsModal from "../Modal/ContactModal.jsx";
import avatarImg from "../../Assets/Shubham.jpg";
function Home2() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description" data-aos="fade-right">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <div data-aos="fade-right">
              <Aboutcard />
            </div>
          </Col>
          <Col
            md={4}
            className="myAvtar"
            data-aos="fade-down"
            style={{ marginTop: "-32px" }}
          >
            <Tilt>
              <img src={avatarImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <p
              className="home-about-body"
              data-aos="fade-up"
              style={{ color: "white" }}
            >
              I am an IT grad by degree.
              <br />
              <br />I have proficient knowledge in
              <i>
                <b className="purple"> Javascript, React & Redux. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building websites &nbsp;
              <i>
                <b className="purple">for social cause</b> like
                donations,teaching etc and also in areas related to{" "}
                <b className="purple">commercial living</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js </b>
              </i>
            </p>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
            data-aos="fade-down"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social" data-aos="fade-up">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:shubham35godda@gmail.com?subject=subject"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiGmail />
                </a>
                <br /> <br />
                <div> shubham35godda@gmail.com</div>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/shubhamkr0412"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
                <br /> <br />
                <div>https://github.com/shubhamkr0412</div>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shubham-kumar04/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
                <br /> <br />
                <div>linkedin.com/in/shubham-kumar04</div>
              </li>
            </ul>
            <h3>
              Contact No:
              <p
                href="tel:+7979906053"
                style={{
                  color: "purple",
                }}
              >
                +91 7979906053
              </p>
            </h3>
            <br /> <br />
            <TransitionsModal />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
