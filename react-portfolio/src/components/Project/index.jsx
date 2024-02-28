// import "./style.css";
import { Card, CardBody, CardLink, CardText } from "react-bootstrap";
import cardIcon from "../../images/stars.png";

Card.defaultProps = {
  project: {
    name: "ReadME generator",
    description: "ReadMe generator using node.js",
    github: "https://github.com/hamdishh/README-gengen",
    demo: "",
  },
};

function Project({ project, className }) {
  return (
    <div className="project-container ${className}`">
      <Card className="project-card">
        <CardBody>
          <img src={cardIcon} alt="iconcard" />
          <CardText>{project.name}</CardText>
          <CardText>{project.description}</CardText>
          <CardLink href={project.github}>GitHub</CardLink>
          <CardLink href={project.demo}>Demo</CardLink>
        </CardBody>
      </Card>
    </div>
  );
}

export default Project;
