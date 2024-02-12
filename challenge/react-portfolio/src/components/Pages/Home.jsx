import React from "react";
import NavbarEl from "../../components/Navbar";
import Project from "../../components/Project";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Hamdi Sheikhabdullahi</h1>
      <img src={"../images/150x150.png"} alt="Your Headshot" />
      <p>Brand statement</p>
      <p>
        Welcome to my portfolio showcasing my projects and skills as a developer
      </p>
      <Project
        project={{
          name: "README Generator",
          description: "",
          github: "",
          demo: "",
        }}
      />
      <Project
        project={{
          name: "README Generator",
          description: "",
          github: "",
          demo: "",
        }}
      />
      <Project
        project={{
          name: "README Generator",
          description: "",
          github: "",
          demo: "",
        }}
      />
    </div>
  );
};

export default Home;
