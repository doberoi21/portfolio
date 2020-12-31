import React from "react";
import "./Rskill.css";

const Rskill = () => {
  return (
    <div>
      <h4 className="Rskill">SKILLS</h4>
      <ul>
          <li>HTML</li>
          <div>
            <input className="range-color" type="range" min="0" max="100" value="89" />
          </div>
          <li>CSS</li>
          <div>
            <input className="range-color" type="range" min="0" max="100" value="84" />
          </div>
          <li>REACT JS</li>
          <div>
            <input className="range-color" type="range" min="0" max="100" value="60" />
          </div>
          <li>C++</li>
          <div>
            <input className="range-color" type="range" min="0" max="100" value="55" />
          </div>
          <li>Python</li>
          <div>
            <input className="range-color" type="range" min="0" max="100" value="55" />
          </div>
          <li>DBMS</li>
          <div>
            <input className="range-color" type="range" min="0" max="100" value="50" />
          </div>
      </ul>
    </div>
  );
};

export default Rskill;
