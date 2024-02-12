// import "./style.css";
import { Card, CardBody, CardLink, CardText, } from "react-bootstrap";}

Card.defaultProps = {
  project: {
    name: 'ReadME generator',
    description: 'ReadMe generator using node.js',
    github: 'https://github.com/hamdishh/README-gengen',
    demo: '',
  }
}

function Project({ project }) {
  return (
    <Card>

      <CardBody >
        <CardText>{project.name}</CardText>
        <CardText>{project.description}</CardText>
        <CardLink href={project.github}>GitHub</CardLink>
        <CardLink href={project.demo}>Demo</CardLink>
      </CardBody>

    </Card>
  );
}

export default Project;