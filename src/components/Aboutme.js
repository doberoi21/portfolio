import React from "react";
import "./Aboutme.css";
import Rskill from './Rskill';
import Projects from './Projects';
import { NavLink } from "react-router-dom";

import profile from './formal.jpeg';
const Aboutme = () => {
  return (
    <section className="section-one">
    <div className="container1">
      <div className="container-one">
        <h2 className="name">DIVYANSHI OBEROI</h2>
        <h4 className="job">STUDENT|FRONTEND DEVELOPER</h4>
        <p className="intro">I'm currently pursuing Computer Science Engineering from Dronacharya College of Engineering.An optimistic,cheerful individual with time management ability. I don't have practical experiences, but I really want to explore and experience my potential by delivering the best services. </p>
        <NavLink to="/skills/resume">
          <button type="button" className="view"><i class="far fa-file-alt"></i> View Resume</button>
          </NavLink>
      </div>
      <div className="container-two">
        <img  src={profile} width="60%" height="100%" className="profile-photo"/>
      </div>
      </div>
      <div className="about-part">
        <div className="skilll">
          <Rskill/>
        </div>
        <div className="projects">
          <Projects/>
        </div>
      </div>

    </section>
  );
};

export default Aboutme;
