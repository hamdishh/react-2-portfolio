// import Hero from '../components/Hero';
// import Container from '../components/Container';
// import Row from '../components/Row';
// import Col from '../components/Col';
import { Container, Row, Col, Image } from "react-bootstrap";
import myImage from "../../images/IMG_1343.jpeg"


function About() {
  return (
    <div className="about-container">
      <Container>
        <Row>
          <Col>
            <h1>Welcome To My Portfolio!</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={3}>
            <Image src={myImage} alt="My Image" fluid />
          </Col>
          <Col xs={12} md={9}>
            <p>
              Hello, I'm Hamdi Sheikh, and I've just spent the last 16 weeks
              exploring the land of front end web development.
            </p>
            <p>
              I'm a 20 year old student based in Birmingham and in my spare time
              I like to exercise, study Arabic, and watch anime!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;