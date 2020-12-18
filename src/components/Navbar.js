import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import Aboutme from './Aboutme';
import profile from "./formal.jpeg";
const Navbar = () => {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="profile-menu">
          <label>DIVYANSHI OBEROI</label>
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
          <span><i class="fas fa-address-card">&nbsp;&nbsp;&nbsp;&nbsp;About me</i></span>
          </NavLink>
          <NavLink
            exact
            className="b"
            activeClassName="active_class"
            to="/skills"
          >
            <span><i class="far b fa-lightbulb">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Skills</i></span>
          </NavLink>
          <NavLink
            exact
            className="b"
            activeClassName="active_class"
            to="/skills/projects"
          >
            <span><i class="fas fa-project-diagram" style={{fontSize:'15px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Projects</i></span>
          </NavLink>
          <NavLink
            exact
            className="b"
            activeClassName="active_class"
            to="/skills/projects/contact"
          >
          <span><i class="fas fa-envelope-open-text">&nbsp;&nbsp;&nbsp;&nbsp;Contact Me</i></span>
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
