//remember path src/components/Home.js
import React from 'react';
import NavbarEl from '../../components/Navbar';




const Home = () => {
    return (
      
        <div className="home-container">
          <NavbarEl/>
            <h1>Hamdi Sheikhabdullahi</h1>
            <img src={('../images/150x150.png')} alt="Your Headshot" />
            <p>Brand statement</p>
            <p>Welcome to my portfolio showcasing my projects and skills as a developer</p>

            
        </div>
    );
};

export default Home;