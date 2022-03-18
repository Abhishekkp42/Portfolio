import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/shubham.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          data-aos="fade-up"
        >
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        <Row className="resume" data-aos="fade-up">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Training</h3>
            <Resumecontent
              title="Python Industrial Training"
              date="June 2020"
              content={[
                "Attended a training session at Haldia Institute of technology on Python.",
              ]}
            />
            <h3 className="resume-title">Voluntary Experience</h3>
            <Resumecontent
              title="Jigayasa"
              content={[
                "Jigyasa is a NGO that provides free education to poor childrens in Haldia city. ",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title=" B.Tech Information Technology [ Haldia Institute of Technology      (MAKAUT),    West Bengal ] "
              date="2015 - 2019"
              content={["CGPA: 6.5"]}
            />
            <Resumecontent
              title="12TH BOARD [ S.D.M.Y college (B.S.E.B), Dhoraiya, Bihar. ]"
              date="2013 - 2015"
              content={["Percentage: 57.4%"]}
            />
            <Resumecontent
              title="10TH BOARD [ Saint Thomas School (I.C.S.E), Godda, Jharkhand ] "
              date="2012"
              content={["Precentage: 75.6%"]}
            />
            {/* <h3 className="resume-title">Ranks and Achivements</h3> */}
            {/* <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            /> */}
          </Col>
        </Row>
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          data-aos="fade-right"
        >
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
