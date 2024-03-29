import { Container, Row, Col, Image, Button } from "react-bootstrap";
import myImage from "../../images/IMG_1343.jpeg";
import myIcon from"../../images/fireworks.png";

function About() {
  return (
    <div className="about-container">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={8} className="text-center">
            <h1 className="heading">
              Welcome To My Portfolio! <img src={myIcon} alt="Icon" className="icon"/>
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={3} className="text-center">
            <Image src={myImage} alt="My Image" fluid />
          </Col>
          <Col xs={12} md={7}>
            <p className="larger-text">
              Hello, I'm Hamdi Sheikh, and I've just spent the last 16 weeks
              exploring the land of front end web development.
            </p>
            <p className="larger-text">
              I'm a 20 year old student based in Birmingham and in my spare time
              I like to exercise, study Arabic, and watch anime! Click any of
              these three buttons if your looking for any top tier anime
              recommendations, want to study new lamguages together or are
              looking for some low impact workouts!
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col xs={12} className="text-center">
            <Button
              variant="primary"
              className="me-3 py-3 gradient-button"
              href="https://myanimelist.net/anime/28223"
            >
              MyAnimeList⭐️
            </Button>
            <Button
              variant="primary"
              className="me-3 py-3 gradient-button"
              href="https://www.busuu.com/dashboard#/profile/124357599/progress"
            >
              Busuu⭐️
            </Button>
            <Button
              variant="primary"
              className="py-3 gradient-button"
              href="https://www.chloeting.com/"
            >
              Chloe Ting Shred⭐️
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
