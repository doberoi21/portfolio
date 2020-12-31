import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div>
      <h4 className="education">EDUCATION</h4>
      <div>
        <ul>
          <div className="edu-list">
            {/* <i class="fas fa-circle"></i> */}
            <li>B-Tech</li>
          </div>
          <p>
            Dronacharya College of Engineering,
            <br />
            Farrukh Nagar,Gurugram,Haryana-123506
          </p>
          <p>(2019-2023)</p>

          <div className="edu-list">
            {/* <i class="fas fa-circle"> </i> */}
            <li>
            Class 12<sup>th</sup> CBSE BOARDS
            </li>
          </div>
          <p>
            Mira Model School,
            <br />
            Janak Puri,New Delhi-110058
          </p>
          <p>(2017-2019)</p>

          <div className="edu-list">
            {/* <i class="fas fa-circle"></i> */}
            <li>
            Class 10<sup>th</sup> CBSE BOARDS
            </li>
          </div>
          <p>
            Mira Model School,
            <br />
            Janak Puri,New Delhi-110058
          </p>
          <p>(2007-2017)</p>
        </ul>
      </div>
    </div>
  );
};

export default Education;
