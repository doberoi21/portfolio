import React from "react";
import "./Contactme.css";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
const Contactme = () => {
  return (
    <div className="contact">
    <div>
      <Navbar />
    </div>
    <div className="container-first">
      <div className="part1">
        <h3 className="contact-text">CONTACT ME</h3>
        <div className="main">
          <p>
            Interested in hiring me for your project or just want to say hi? You
            can fill in the contact form below or send me
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp; an email to{" "}
            <NavLink to="/contactdiv01@gmail.com">
              <em>contactdiv01@gmail.com</em>
            </NavLink>
          </p>
        </div>
        <p>Want to get connected? Follow me on the social channels below:</p>
        <div className="contact-tags">
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
      <div className="part2">
        <h3>GET IN TOUCH</h3>
        <div>
          <form>
            <div className="fields">
              <label>Name</label>
              <div>
                <div className="field">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="field">
                  <label>E-mail</label>
                  <br />
                  <input type="email" placeholder="abc@gmail.com" />
                </div>
                <div className="field">
                  <label>Text</label>
                  <br />
                  <textarea rows="5"></textarea>
                </div>
                <div className=" submit button">Submit</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contactme;
