import React from "react";
import "./Resume.css";
import Education from './Education';
import Rskill from './Rskill';
import Work from './Work';
import Volunteer from './Volunteer';
import Certi from './Certi';
import Rcontact from './Rcontact';
const Resume = () => {
  return (
    <section className="resume">
      <header className="secone">
        <div className="header-text">
          <h2 className="header-name">DIVYANSHI OBEROI</h2>
          <h4 className="header-intro">FRONTEND DEVELOPER</h4>
        </div>
        <div className="rcon">
          <Rcontact/>
        </div>
      </header>
      <div className="middle">
        <nav className="less-prior">
            <div className="edu">
                <Education/>
            </div>
            <div className="skil">
                <Rskill/>
            </div>
        </nav>
        <div>
        <div className="wor">
          <Work/>
        </div>
        <div className="vol" >
          <Volunteer />
        </div>
        <div className="cer" >
          <Certi />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
