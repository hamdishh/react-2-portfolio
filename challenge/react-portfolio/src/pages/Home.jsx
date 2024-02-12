import { Container, Row, Col } from 'react-bootstrap'; 
import NavbarEl from '../components/Navbar';
import Project from '../components/Project';



const Home = () => {
    // const projects = [
    //     {
    //       name: 'ReadME generator',
    //       description: 'ReadMe generator using node.js',
    //       github: 'https://github.com/hamdishh/README-gengen',
    //       demo: '',
    //     },
    //     {
    //       name: 'Console Finances',
    //       description: 'Analysis of financial data being printed to the console',
    //       github: 'https://github.com/hamdishh/Console-Finances',
    //       demo: 'https://hamdishh.github.io/Console-Finances/',
    //     },
        
    //   ];



    return (
      
        <Container fluid='lg' id="home-container">
          <Row>

            <Navbar />
          </Row>
          <Card />
          <Row>

            <h1>Hamdi Sheikhabdullahi</h1>
            <img src={('../images/150x150.png')} alt="Your Headshot" />
            <p>Brand statement</p>
            <p>Welcome to my portfolio showcasing my projects and skills as a developer</p>
          </Row>

            
        </Container>
    );
};

export default Home;