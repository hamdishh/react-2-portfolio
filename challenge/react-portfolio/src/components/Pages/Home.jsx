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
      <div className="project-container"> {/* Parent container for projects */}

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
          name: "Password Generator",
          description: "",
          github: "https://github.com/hamdishh/Password-Generator",
          demo: "https://hamdishh.github.io/Password-Generator/",
        }}
      />
      <Project
        project={{
          name: "Team Profile Generator",
          description: "",
          github: "https://github.com/hamdishh/meet-the-team",
          demo: "",
        }}
      />
    </div>
    
    <div className="project-container"> {/* Parent container for projects */}

      <Project
        project={{
          name: "Horiseon Refractor",
          description: "",
          github: "https://github.com/hamdishh/refrac-horeoson",
          demo: "https://hamdishh.github.io/refrac-horeoson/",
        }}
      />
      <Project
        project={{
          name: "WE-ARE-MANY",
          description: "",
          github: "https://github.com/CestSamual/We-Are-Many",
          demo: "https://cestsamual.github.io/We-Are-Many/",
        }}
      />
      <Project
        project={{
          name: "Console Finances",
          description: "",
          github: "https://github.com/hamdishh/Console-Finances",
          demo: "https://hamdishh.github.io/Console-Finances/",
        }}
      />
    </div>

    
    </div>
  );
};

export default Home;
