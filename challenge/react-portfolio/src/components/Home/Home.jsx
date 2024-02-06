//remember path src/components/Home.js
import React from 'react';
import { Button, Card } from 'react-bootstrap';

// Define the Bootstrap card component
function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../images/your-image.png" alt="Your Image" />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
        <Card.Text>
          Description of your project goes here. You can provide a brief overview of what the project is about.
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  );
}
const Home = () => {
    return (
        <div className="home-container">
            <h1>Hamdi Sheikhabdullahi</h1>
            <img src={('../images/150x150.png')} alt="Your Headshot" />
            <p>What tf the brand statement is</p>
            <p>Welcome to my portfolio showcasing my projects and skills as a developer</p>

            
        </div>
    );
};

export default Home;