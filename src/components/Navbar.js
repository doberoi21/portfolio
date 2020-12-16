import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import profile from "./formal.jpeg";
import Aboutme from "./Aboutme";
const Navbar = () => {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="profile-menu">
          <span>DIVYANSHI OBEROI</span>
          <img src={profile} height="150px" width="150px" />
          <p className="profile-intro">
            Hi, my name is Divyanshi Oberoi.
            <br /> Welcome to my personal website!
          </p>

          <div className="tags">
            <NavLink to="https://github.com/doberoi21">
            <i class="fab fa-github-square"></i>
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/divyanshi-oberoi-a006331aa/">
            <i class="fab fa-linkedin"></i>
            </NavLink>
            <NavLink to="">
            <i class="fab fa-instagram-square"></i>
            </NavLink>
          </div>
        </div>

        <hr className="style-two" />

        {/* <br/> */}
        <div className="nav-menu">
          <NavLink
            exact
            className="b active"
            activeClassName="active_class"
            to="/"
          >
           <div className="comine"><i class="fas fa-address-card">&nbsp;&nbsp;&nbsp;&nbsp;</i>About me</div>
          </NavLink>
          <NavLink
            exact
            className="b"
            activeClassName="active_class"
            to="/skills"
          >
            <div className="comine"><i class="far b fa-lightbulb">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>Skills</div>
          </NavLink>
          <NavLink
            exact
            className="b"
            activeClassName="active_class"
            to="/skills/projects"
          >
            <div className="comine"><i class="fas fa-project-diagram" style={{fontSize:'15px'}}>&nbsp;&nbsp;&nbsp;</i>Projects</div>
          </NavLink>
          <NavLink
            exact
            className="b"
            activeClassName="active_class"
            to="/skills/projects/contact"
          >
            <div className="comine"><i class="fas fa-envelope-open-text">&nbsp;&nbsp;&nbsp;&nbsp;</i>Contact Me</div>
          </NavLink>
        </div>
      </div>
      
    </div>
    // function myFunction() {
    //     var element = document.body;
    //     element.classList.toggle("dark-mode");
    //   }
  );
};
export default Navbar;
