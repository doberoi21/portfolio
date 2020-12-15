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
              <i class="fab fa-github"></i>
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/divyanshi-oberoi-a006331aa/">
              <i class="fab fa-linkedin-in"></i>
            </NavLink>
            <NavLink to="">
              <i class="fab fa-instagram"></i>
            </NavLink>
          </div>
        </div>
       
        <hr
        style={{
            color: "rgba(0,0,0,0.1)",
            backgroundColor:"rgba(0,0,0,0.1)",
            height: 0.3
        }}
    />
       
        {/* <br/> */}
        <div className="nav-menu">
          <NavLink exact className="b active" activeClassName="active_class" to="/">
            <i class="fas fa-address-card"></i>  About me
          </NavLink>
          <NavLink
            exact
            className="b"
            activeClassName="active_class"
            to="/skills"
          >
            <i class="far fa-lightbulb"></i>  Skills
          </NavLink>
          <NavLink
            exact
            className="b"
            activeClassName="active_class"
            to="/skills/projects"
          >
            <i class="fas fa-project-diagram"></i>  Projects
          </NavLink>
          <NavLink
            exact
            className="b"
            activeClassName="active_class"
            to="/skills/projects/contact"
          >
            <i class="fas fa-envelope-open-text"></i>  Contact Me
          </NavLink>
        </div>
      </div>
      <div className="main_container">
          ABC
      </div>
    </div>
    // function myFunction() {
    //     var element = document.body;
    //     element.classList.toggle("dark-mode");
    //   }
      
  );
};
export default Navbar;
